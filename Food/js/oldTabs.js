document.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('.tabheader__items'),
        menuItem = menu.querySelectorAll('.tabheader__item'),
        menuInfo = document.querySelectorAll('.tabcontent');
  

  menu.addEventListener('click', event => {
    if(event.target && event.target.classList.contains('tabheader__item')) {
      menuItem.forEach((element, index) => {
        if(event.target == element) {
          hideMenu()
          showMenu(index)
        }
      })
    }
  })

  
  function hideMenu() {
    menuItem.forEach(element => element.classList.remove('tabheader__item_active'))

    menuInfo.forEach(element => {
      element.classList.add('hide')
      element.classList.remove('show', 'fade')
    })
  }
  function showMenu(index = 0) {
    menuItem[index].classList.add('tabheader__item_active')

    menuInfo[index].classList.add('show', 'fade')
    menuInfo[index].classList.remove('hide')
  }


  hideMenu()
  showMenu()
})