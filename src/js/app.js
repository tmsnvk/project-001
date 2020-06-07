// function - to play audio;
const playAudio = () => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

// function - to toggle visual style;
const toggleClass = () => {
  const box = document.querySelector(`[data-key="${event.keyCode}"]`);
  if (!box) return;
  box.classList.toggle("transform");
}

// function - to control the app functionality; 
const masterSwitch = () => {
  playAudio();
  toggleClass();
};

// eventlistener - to listen for specific keydowns and trigger the masterSwitch() function;
window.addEventListener("keydown", masterSwitch, false);