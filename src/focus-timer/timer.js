import { actions } from "./actions.js";
import { elements } from "./elements.js";
import { sounds } from "./sounds.js";
import { state } from "./state.js";

function countdown() {
  clearInterval(state.countdownId);

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    sounds.alarm.play();
    actions.reset();
    return;
  }
  
  updateDisplay(minutes, seconds);

  state.countdownId = setTimeout(() => countdown(), 1000);
}

function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, '0');
  elements.seconds.textContent = String(seconds).padStart(2, '0');
}

export const timer = {
  countdown,
  updateDisplay,
}