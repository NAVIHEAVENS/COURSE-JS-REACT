window.addEventListener('DOMContentLoaded', () => {

  const tabsParent = document.querySelector('.tabheader__items'),
        tabs = tabsParent.querySelectorAll('div'),
        tabsContent = document.querySelectorAll('.tabcontent');


  function hideTabsContent(content, tabs, ac) {
    content.forEach(item => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    });
    tabs.forEach(item => item.classList.remove(ac));
  }
  function showTabsContent(content, tabs, ac, index = 0) {
    content[index].classList.add('show', 'fade')
    content[index].classList.remove('hide');
    tabs[index].classList.add(ac);
  }
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, index) => {
        if(target == item) {
          hideTabsContent(tabsContent, tabs, 'tabheader__item_active')
          showTabsContent(tabsContent, tabs, 'tabheader__item_active', index)
        }
      })
    }
  })


  hideTabsContent(tabsContent, tabs, 'tabheader__item_active')
  showTabsContent(tabsContent, tabs, 'tabheader__item_active')
})