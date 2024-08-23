document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio');
  const padTypeSelect = document.getElementById('padTypeSelect');
  const padKeySelect = document.getElementById('padKeySelect');
  const cutoffControl = document.getElementById('cutoffControl');
  const volumeControl = document.getElementById('volumeControl');
  const playButton = document.getElementById('playButton');

  const audioContext = new AudioContext();

  const source = audioContext.createMediaElementSource(audioElement);

  const lowPassFilter = audioContext.createBiquadFilter();
  lowPassFilter.type = 'lowpass';
  lowPassFilter.frequency.value = getCutoffFrequency();

  const gainNode = audioContext.createGain();
  gainNode.gain.value = getGain();

  function getCutoffFrequency() {
    const minValue = 20;
    const maxValue = 20000;
    return (
      Math.exp((1 - cutoffControl.value) * Math.log(maxValue / minValue)) *
      minValue
    );
  }

  function getGain() {
    return 1 - volumeControl.value;
  }

  source.connect(lowPassFilter);
  lowPassFilter.connect(gainNode);
  gainNode.connect(audioContext.destination);

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

  cutoffControl.addEventListener('input', () => {
    lowPassFilter.frequency.value = getCutoffFrequency();
  });

  volumeControl.addEventListener('input', () => {
    gainNode.gain.value = getGain();
  });

  audioElement.addEventListener('timeupdate', () => {
    const buffer = 3;

    if (audioElement.duration - audioElement.currentTime <= buffer) {
      audioElement.currentTime = 10;
    }
  });
});
