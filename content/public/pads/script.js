document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio');
  const padTypeSelect = document.getElementById('padTypeSelect');
  const padKeySelect = document.getElementById('padKeySelect');
  const hpfControl = document.getElementById('hpfControl');
  const lpfControl = document.getElementById('lpfControl');
  const volumeControl = document.getElementById('volumeControl');
  const playButton = document.getElementById('playButton');

  const audioContext = new AudioContext();

  const source = audioContext.createMediaElementSource(audioElement);

  const lpf = audioContext.createBiquadFilter();
  lpf.type = 'lowpass';
  lpf.frequency.value = getLpfFrequency();

  const hpf = audioContext.createBiquadFilter();
  hpf.type = 'highpass';
  hpf.frequency.value = getHpfFrequency();

  const gain = audioContext.createGain();
  gain.gain.value = getGain();

  function getHpfFrequency() {
    const minValue = 20;
    const maxValue = 20000;
    return (
      Math.exp((1 - hpfControl.value) * Math.log(maxValue / minValue)) *
      minValue
    );
  }

  function getLpfFrequency() {
    const minValue = 20;
    const maxValue = 20000;
    return (
      Math.exp((1 - lpfControl.value) * Math.log(maxValue / minValue)) *
      minValue
    );
  }

  function getGain() {
    return 1 - volumeControl.value;
  }

  source.connect(hpf);
  hpf.connect(lpf);
  lpf.connect(gain);
  gain.connect(audioContext.destination);

  let playing = false;
  playButton.addEventListener('click', () => {
    const audioSrc = padTypeSelect.value + '/' + padKeySelect.value;
    if (!audioElement.src.includes(audioSrc)) {
      audioElement.src = audioSrc;
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      audioElement.play();
      playing = true;
    } else {
      if (playing) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      playing = !playing;
    }
  });

  hpfControl.addEventListener('input', () => {
    hpf.frequency.value = getHpfFrequency();
  });

  lpfControl.addEventListener('input', () => {
    lpf.frequency.value = getLpfFrequency();
  });

  volumeControl.addEventListener('input', () => {
    gain.gain.value = getGain();
  });

  audioElement.addEventListener('timeupdate', () => {
    const buffer = 3;

    if (audioElement.duration - audioElement.currentTime <= buffer) {
      audioElement.currentTime = 10;
    }
  });
});
