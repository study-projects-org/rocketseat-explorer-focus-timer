
const forestAudio = new Audio('./assets/forest.wav');
const rainAudio = new Audio('./assets/rain.wav');
const fireplaceAudio = new Audio('./assets/fireplace.wav');
const coffeeShopAudio = new Audio('./assets/coffee-shop.wav');
const buttonPressAudio = new Audio('./assets/button-press.wav');
const alarmAudio = new Audio('./assets/kitchen-timer.mp3');

forestAudio.loop = true;
rainAudio.loop = true;
fireplaceAudio.loop = true;
coffeeShopAudio.loop = true;

export const sounds = {
  forest: forestAudio,
  rain: rainAudio,
  fireplace: fireplaceAudio,
  coffeeShop: coffeeShopAudio,
  buttonPress: buttonPressAudio,
  alarm: alarmAudio,
};