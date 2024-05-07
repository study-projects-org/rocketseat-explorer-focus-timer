import { actions } from './actions.js';
import { elements } from './elements.js'
import { sounds } from './sounds.js';

function registerTimeControls() {
  const { timeControls, soundControls } = elements;

  timeControls.addEventListener('click', (event) => {
    const { target } = event;
    const { action } = target.dataset;

    if (typeof actions[action] !== 'function') {
      return;
    }

    sounds.buttonPress.play();

    actions[action]();
  });

}

function registerSoundControls() {
  const { soundControls } = elements;

  soundControls.addEventListener('click', (event) => {
    const { target } = event;
    const { sound } = target.dataset;


    if (sound && sounds[sound]) {
      actions.togglePlay(sound);

      toggleActiveButton(sound);
    }
  });
}

function toggleActiveButton(value) {
  const { soundControls } = elements;
  const soundButtons = soundControls.querySelectorAll('button');
  soundButtons.forEach(button => {
    if (button.dataset.sound === value) {
      button.classList.toggle('active');
    } else {
      button.classList.remove('active');
    }
  });
}

export const events = {
  registerTimeControls,
  registerSoundControls,
};