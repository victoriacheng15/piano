const keys = document.querySelectorAll('[data-audio]');

keys.forEach((key) => key.addEventListener('click', () => {
  const num = key.dataset.audio;
  const sound = new Audio(`audio/key-${num}.mp3`);
  sound.play();
}));
