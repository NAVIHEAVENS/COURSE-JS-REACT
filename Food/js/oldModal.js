document.addEventListener('DOMContentLoaded', () => {

  const btnsOpen = document.querySelectorAll('[data-modal]'),
        btnClose = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');
        //modalTimeout = setTimeout(() => showModal(modal), 5000),

        
  function showModalByScroll() {
    if(window.pageYOffset > 2000) {
      showModal(modal);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  function showModal(block) {
      block.classList.add('show')
      block.classList.remove('hide')
      document.body.style.overflow = 'hidden'
      clearTimeout(modalTimeout)
  }
  function hideModal(block) {
    block.classList.add('hide')
    block.classList.remove('show')
    document.body.style.overflow = ''
  }


  btnsOpen.forEach((element) => {
    element.addEventListener('click', () => {
      showModal(modal)
    })
  })
  btnClose.addEventListener('click', () => {
    hideModal(modal)
  })
  modal.addEventListener('click', event => {
    //if(event.target && event.target.classList.contains('modal')) 
    if(event.target === modal) {
      hideModal(modal)
    }
  })
  document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && modal.classList.contains('show')) {
      hideModal(modal)
    }
  })
  //window.addEventListener('scroll', showModalByScroll)
})  