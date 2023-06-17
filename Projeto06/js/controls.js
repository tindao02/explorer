export default function Controls({
  buttonPause
  , buttonPlay
  , buttonSet
  , buttonStop
  , minutes
}) {
  
  const reset  = (buttonPlay, buttonPause, buttonSet, buttonStop) => {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
  }
  
  const hideAdd = (e) => {
    e.classList.add('hide');
  }
  
  const hideRemove = (e) => {
    e.classList.remove('hide');
  }

  const hideBotoesPlayPause = (buttonPlay, buttonPause) => {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
  }

  const hideBotoesSound = (buttonSoundOn, buttonSoundOff) => {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
  }

  const play = () => {
    hideAdd(buttonPlay);
    hideRemove(buttonPause);
    hideAdd(buttonSet);
    hideRemove(buttonStop);
  }

  const pause = () => {

  }

  const getMinutes = () => {
    let newMinutes = prompt('Quantos minutos?').trim();

    if((!newMinutes) || (isNaN(newMinutes)) || (newMinutes > 60)) {
      return false;
    }
    return newMinutes;
  }

  return {
    resetControls
    , play
    , pause
    , hideBotoesPlayPause
    , getMinutes 
  }

}
