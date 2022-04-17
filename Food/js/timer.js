'use strict'

document.addEventListener('DOMContentLoaded', () => {  

  const  deadline = '2022-04-11'


  function getTimeRemaining(deadline) {
    let milliseconds = Date.parse(deadline) - Date.parse(new Date()),
        days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)),
        hours = Math.floor(milliseconds / (1000 * 60 * 60) % 24),
        minutes = Math.floor(milliseconds / (1000 * 60) % 60),
        seconds = Math.floor(milliseconds / 1000 % 60);

    return { milliseconds, days, hours, minutes, seconds }
  }
  function setClock() {
    let days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000)
    
    updateClock()

    function updateClock() {
      let times = getTimeRemaining(deadline)
      
      days.innerHTML = doubleZero(times.days)
      hours.innerHTML = doubleZero(times.hours)
      minutes.innerHTML = doubleZero(times.minutes)
      seconds.innerHTML = doubleZero(times.seconds)

      if(times.milliseconds <= 0) {
        clearInterval(timeInterval)

        days.innerHTML = '00'
        hours.innerHTML = '00'
        minutes.innerHTML = '00'
        seconds.innerHTML = '00'
      }
    }
  }
  function doubleZero(number) {
    if(number >= 0 && number < 10) {
      return number = `0${number}`
    } else {
      return number
    }
  }


  setClock();

})