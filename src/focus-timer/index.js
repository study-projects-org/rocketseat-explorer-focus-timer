import { events } from "./events.js";
import { timer } from "./timer.js";


function start(minutes, seconds) {

  timer.updateDisplay(minutes, seconds);
  events.registerTimeControls();
  events.registerSoundControls();
}

export const FocusTimer = {
  start,
}