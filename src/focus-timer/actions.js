import { sounds } from "./sounds.js";
import { state } from "./state.js";
import { timer } from "./timer.js";

function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown();
}

function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');

  timer.updateDisplay();
}

function increment() {
  state.minutes += 5;

  if (state.minutes > 60) {
    state.minutes = 60;
  }

  timer.updateDisplay();
}

function decrement() {
  state.minutes -= 5;

  if (state.minutes < 0) {
    state.minutes = 0;
  }

  timer.updateDisplay();
}

function togglePlay(soundName) {
  if (state.runningSound === soundName) {
    sounds[soundName].pause();
    state.runningSound = null;
  } else {
    if (state.runningSound) {
      sounds[state.runningSound].pause();
    }
    sounds[soundName].play();
    state.runningSound = soundName;
  }
}

export const actions = {
  toggleRunning,
  reset,
  increment,
  decrement,
  togglePlay,
}