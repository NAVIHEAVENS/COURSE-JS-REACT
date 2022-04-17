'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let offset = 0;
  const slidersWrapper = document.querySelector('.offer__slider-wrapper'),
        slidersInner = document.querySelector('.offer__slider-inner'),
        sliders = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        width = window.getComputedStyle(slidersWrapper).width,
        plusWidth = +width.slice(0, width.length - 2),
        minusWidth = - +width.slice(0, width.length - 2)

  //slidersWrapper.style.overflow = 'hidden'

  slidersInner.style.display =  'flex'
  slidersInner.style.width =  sliders.length * +width.slice(0, width.length - 2) + 'px'

  sliders.forEach(slider => slider.style.width = width)

  prev.addEventListener('click', () => {
    getNewSlide(plusWidth)
    console.log('prev')
  })
  next.addEventListener('click', () => {
    getNewSlide(minusWidth)
    console.log('next')
  })

  function getNewSlide(width) {
    if(offset ===  ) {
      offset = 0
    } if(offset == 0) {

    }else {
      offset += width
    }
    
    console.log(offset)
    slidersInner.style.transform = `translateX(${offset}px)`

  }

}) 