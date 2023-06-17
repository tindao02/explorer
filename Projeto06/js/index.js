import Controls from "./controls.js";
import { Timer } from "./timer.js";
import Sound from "./sounds.js";
import { 
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay 
} from "./elements.js";

/* VARIÁVEIS */
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
});

const controls = Controls({
    buttonPause
  , buttonPlay
  , buttonSet
  , buttonStop
});

const sound = Sound()

/* EVENTOS */
buttonPlay.addEventListener('click', () => {
  sound.presButton();
  controls.play();
  timer.countDown();
});

buttonPause.addEventListener('click', () => {
  controls.pause();
  timer.hold();
  sound.buttonPressAudio();
});

buttonStop.addEventListener('click', () => {
  resetControls(buttonPlay, buttonPause, buttonSet, buttonStop);
  resetTimer(minutes, timerTimeOut, secondsDisplay, minutesDisplay);
  sound.buttonPressAudio(); 
});

buttonSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes();

  if(!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes);
  timer.updateMinutes(newMinutes);
});

buttonSoundOn.addEventListener('click', hideBotoesSound(buttonSoundOn, buttonSoundOff));
buttonSoundOff.addEventListener('click', hideBotoesSound(buttonSoundOn, buttonSoundOff));