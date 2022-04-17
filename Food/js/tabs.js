'use strict'

document.addEventListener('DOMContentLoaded', () => {

  const tabMenu = document.querySelector('.tabheader__items'),
        tabsItem = tabMenu.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');
  
  function hideTabs() {
    tabsItem.forEach(tbs => tbs.classList.remove('tabheader__item_active'))
    tabsContent.forEach(content => {
      content.classList.add('hide')
      content.classList.remove('show', 'fade')
    })
  } 
  function showTabs(id = 0) {
    tabsItem[id].classList.add('tabheader__item_active')
    tabsContent[id].classList.add('show', 'fade')
    tabsContent[id].classList.remove('hide')
  }


  tabMenu.addEventListener('click', event => {
    if(event.target && event.target.classList.contains('tabheader__item')) {
      tabsItem.forEach((tab, id) => {
        if(event.target === tab) {
          hideTabs()
          showTabs(id)
        }
      })
    }
  })


  hideTabs()
  showTabs()
})