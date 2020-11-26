const playAudio = () => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const toggleClass = () => {
  const box = document.querySelector(`[data-key="${event.keyCode}"]`);
  if (!box) return;
  box.classList.toggle("transform");
};

const masterSwitch = () => {
  playAudio();
  toggleClass();
};

window.addEventListener("keydown", masterSwitch, false);