function getLpfFrequency(value) {
  const minValue = 20;
  const maxValue = 20000;
  return Math.exp((1 - value) * Math.log(maxValue / minValue)) * minValue;
}

function noteToNoteName(note) {
  const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const octave = Math.floor(note / 12) - 1;
  return noteNames[note % 12] + octave;
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    navigator.wakeLock.request('screen');
  }
});

navigator.wakeLock.request('screen');

document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio');
  const padTypeSelect = document.getElementById('padTypeSelect');
  const padKeySelect = document.getElementById('padKeySelect');
  const bassOctaveSelect = document.getElementById('bassOctaveSelect');
  const bassSplitNoteInput = document.getElementById('bassSplitNoteInput');
  const padLpfControl = document.getElementById('padLpfControl');
  const bassLpfControl = document.getElementById('bassLpfControl');
  const padVolumeControl = document.getElementById('padVolumeControl');
  const bassVolumeControl = document.getElementById('bassVolumeControl');
  const playButton = document.getElementById('playButton');
  const bassButton = document.getElementById('bassButton');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const midiButton = document.getElementById('midiButton');

  const audioContext = new AudioContext();

  const masterGain = audioContext.createGain();
  masterGain.gain.value = 0.5;
  masterGain.connect(audioContext.destination);

  const padSource = audioContext.createMediaElementSource(audioElement);

  const padLpf = audioContext.createBiquadFilter();
  padLpf.type = 'lowpass';
  padLpf.frequency.value = getLpfFrequency(padLpfControl.value);

  const padGain = audioContext.createGain();
  padGain.gain.value = 1;

  const bassGain2 = audioContext.createGain();
  bassGain2.gain.value = 0.5;

  const bassLpf = audioContext.createBiquadFilter();
  bassLpf.type = 'lowpass';
  bassLpf.frequency.value = getLpfFrequency(bassLpfControl.value);

  padSource.connect(padLpf);
  padLpf.connect(padGain);
  padGain.connect(masterGain);

  const notes = [];
  const sustainedNotes = [];
  let bassSplitNote = 60 + 1; // Default to C4

  function resumeAudioContext() {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  let playing = false;
  padTypeSelect.addEventListener('change', () => {
    if (playing) {
      playButton.classList.add('playing');
    }
  });
  padKeySelect.addEventListener('change', () => {
    if (playing) {
      playButton.classList.add('playing');
    }
  });

  playButton.addEventListener('click', () => {
    const audioSrc = `pads/${padTypeSelect.value}/${padKeySelect.value}.ogg`;
    playButton.classList.remove('playing');
    if (!audioElement.src.includes(audioSrc)) {
      audioElement.src = audioSrc;
      resumeAudioContext();
      playButton.classList.add('selected');
      audioElement.play();
      playing = true;
    } else {
      if (playing) {
        playButton.classList.remove('selected');
        audioElement.pause();
      } else {
        playButton.classList.add('selected');
        audioElement.play();
      }
      playing = !playing;
    }
  });

  let loadingTimeout = null;
  audioElement.addEventListener('loadstart', () => {
    clearTimeout(loadingTimeout);
    loadingTimeout = setTimeout(() => {
      if (audioElement.readyState < 2) {
        loadingIndicator.style.display = 'block';
      }
    }, 300);
  });
  audioElement.addEventListener('canplay', () => {
    loadingIndicator.style.display = 'none';
  });

  let receivingMidi = false;
  let sustained = false;
  setInterval(() => {
    if (receivingMidi) {
      midiButton.classList.add('selected');
    } else {
      midiButton.classList.remove('selected');
    }
    receivingMidi = false;
  }, 500)
  function onMidiMessage(message) {
    const [command, key, value] = message.data;
    if (command === 254) {
      receivingMidi = true;
      return; // Ignore MIDI active sensing messages
    };
    // console.log('MIDI message:', message.data);
    const handlers = {
      176: onControlChange,
      144: onNoteOn,
      128: onNoteOff,
    };
    handlers[command]?.(key, value);
  }
  async function initMidi() {
    const midi = await navigator.requestMIDIAccess();
    midi.inputs.forEach((input) => {
      input.onmidimessage = onMidiMessage;
    });
    sustained = false;
    notes.length = 0;
    sustainedNotes.length = 0;
    stopNote();
  }
  initMidi();

  function onControlChange(key, value) {
    const handlers = {
      // Pad LPF control
      18: () => {
        padLpfControl.value = 1 - value / 127;
        padLpf.frequency.value = getLpfFrequency(padLpfControl.value);
      },
      // Bass LPF control
      19: () => {
        bassLpfControl.value = 1 - value / 127;
        bassLpf.frequency.value = getLpfFrequency(bassLpfControl.value);
      },
      // Sustain
      64: () => {
        const pedalDown = value > 0;
        if (pedalDown && !sustained) {
          sustained = true;
        } else if (!pedalDown && sustained) {
          sustained = false;
          // Release all sustained notes
          while (sustainedNotes.length > 0) {
            const note = sustainedNotes.pop();
            const index = notes.indexOf(note);
            if (index !== -1) notes.splice(index, 1);
          }
          stopNote();
        }
      },
    }
    if (handlers[key]) {
      handlers[key]();
    } else {
      console.warn(`Unhandled control change: ${key} with value ${value}`);
    }
  }
  function onNoteOn(note, value) {
    if (document.activeElement === bassSplitNoteInput) {
      bassSplitNoteInput.value = noteToNoteName(note);
      bassSplitNote = note + 1;
      bassSplitNoteInput.blur();
    }
    if (value === 0 || !bassEnabled) {
      onNoteOff(note, value);
      return;
    }
    if (!notes.includes(note)) notes.push(note);
    playNote(note);
  }
  function onNoteOff(note, value) {
    const index = notes.indexOf(note);
    if (index !== -1) notes.splice(index, 1);

    if (sustained && !sustainedNotes.includes(note)) {
      sustainedNotes.push(note);
    } else {
      stopNote();
    }
  }

  midiButton.addEventListener('click', initMidi);

  let bassEnabled = false;
  bassButton.addEventListener('click', async () => {
    bassEnabled = !bassEnabled;
    resumeAudioContext();
    bassButton.classList[bassEnabled ? 'add' : 'remove']('selected');
  });

  padVolumeControl.addEventListener('input', () => {
    padGain.gain.value = 1 - padVolumeControl.value;
  });
  padLpfControl.addEventListener('input', () => {
    padLpf.frequency.value = getLpfFrequency(padLpfControl.value);
  });

  bassVolumeControl.addEventListener('input', () => {
    bassGain2.gain.value = 1 - bassVolumeControl.value;
  });
  bassLpfControl.addEventListener('input', () => {
    bassLpf.frequency.value = getLpfFrequency(bassLpfControl.value);
  });

  audioElement.addEventListener('timeupdate', () => {
    const buffer = 3;

    if (audioElement.duration - audioElement.currentTime <= buffer) {
      audioElement.currentTime = 10;
    }
  });

  function midiNoteToFrequency(note) {
    return (
      440 *
      Math.pow(2, (note - 69 + (Number(bassOctaveSelect.value) - 1) * 12) / 12)
    );
  }

  const oscillator = audioContext.createOscillator();
  const bassGain = audioContext.createGain();
  bassGain.gain.value = 0;
  oscillator.type = 'sawtooth';

  oscillator.connect(bassGain);
  bassGain.connect(bassGain2);
  bassGain2.connect(bassLpf);
  bassLpf.connect(masterGain);

  oscillator.start();

  const releaseTime = 0.1;
  const attackTime = 0.1;

  function getMaxNote() {
    return bassSplitNote - Number(bassOctaveSelect.value) * 12;
  }

  function updateOscillatorFrequency() {
    const lowestNote = Math.min(...notes);
    if (lowestNote < getMaxNote()) {
      oscillator.frequency.setValueAtTime(
        midiNoteToFrequency(lowestNote),
        audioContext.currentTime
      );
    }
  }

  function playNote(note) {
    if (note >= getMaxNote()) return;

    const currentTime = audioContext.currentTime;
    bassGain.gain.cancelScheduledValues(currentTime);
    bassGain.gain.setValueAtTime(bassGain.gain.value, currentTime);
    bassGain.gain.linearRampToValueAtTime(1, currentTime + attackTime);
    updateOscillatorFrequency();
  }

  function stopNote() {
    const currentTime = audioContext.currentTime;

    if (notes.length === 0 && sustainedNotes.length === 0) {
      bassGain.gain.cancelScheduledValues(currentTime);
      bassGain.gain.setValueAtTime(bassGain.gain.value, currentTime);
      bassGain.gain.linearRampToValueAtTime(0, currentTime + releaseTime);
    } else {
      updateOscillatorFrequency();
    }
  }
});
