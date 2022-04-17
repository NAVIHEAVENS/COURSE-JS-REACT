document.addEventListener('DOMContentLoaded', () => {
  
  const deadline = '2022-04-10';


  function getTimeRemaining(endtime) {
    let time = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor((time / (1000 * 60 * 60 * 24))),
        hours = Math.floor((time / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((time / (1000 * 60) % 60)),
        seconds = Math.floor((time / 1000 % 60));

    return {time, days, hours, minutes, seconds}
  }
  function setClock(endtime) {
    let timer = document.querySelector('.timer'),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock()

    function updateClock() {
      timeRemaining = getTimeRemaining(endtime)

      days.innerHTML = getZero(timeRemaining.days)
      hours.innerHTML = getZero(timeRemaining.hours)
      minutes.innerHTML = getZero(timeRemaining.minutes)
      seconds.innerHTML = getZero(timeRemaining.seconds)

      if(timeRemaining.time <= 0) {
        clearInterval(timeInterval)
      }
    }
  }
  function getZero(num) {
    if(num >= 0 && num < 10) {
      return num = `0${num}`
    } else {
      return num
    }
  }
  setClock(deadline)
})