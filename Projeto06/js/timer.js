import Sounds from "./sounds";

export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  const updateDisplay= (newMinutes, seconds) => {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.innerText = String(newMinutes).padStart(2, '0');
    secondsDisplay.innerText = String(seconds).padStart(2, '0');
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateTimerDisplay(minutes, 0);

      if((minutes <= 0) && (seconds <= 0)) {
        resetControls();
        updateDisplay();
        Sounds().kitchenTimer;
        return;
      }

      if(seconds <= 0) {
        seconds = 60 ;
        minutes--;
      }
      updateTimerDisplay(minutes, seconds - 1);

      countDown();
    }, 1000);
  }

  const reset = (minutes, timerTimeOut, secondsDisplay, minutesDisplay) => {
    updateTimerDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  const updateMinutes = (newMinutes) => {
    minutes = newMinutes;
  }

  const hold = () => {
    clearTimeout(timerTimeOut);
  }

  return {
    countDown, 
    reset, 
    updateDisplay, 
    updateMinutes,
    hold
  }

}