'use strict'

document.addEventListener('DOMContentLoaded', () => {

  // Modal
  const modal = document.querySelector('.modal'),
        btnsModalOpen = document.querySelectorAll('[data-modalOPen]');
        //timer = setTimeout(openModal, 3000)


  function openModal() {
    modal.classList.add('show')
    modal.classList.remove('hide')

    //clearTimeout(timer)
  }     
  function closeModal() {
    modal.classList.add('hide')
    modal.classList.remove('show')
  }
  function openModalByScroll() {
    if(window.pageYOffset > 2000) {
      openModal()
      window.removeEventListener('scroll', openModalByScroll)
    }
  }

  btnsModalOpen.forEach(btn => btn.addEventListener('click', openModal))
  
  modal.addEventListener('click', event => {
    if(event.target === modal || event.target.getAttribute('data-modalClose') == '') {
      console.log(event.target)
      closeModal()
    }
  })
  window.addEventListener('scroll', openModalByScroll)

  //---------------------------------------------------------------------------

  // Forms
  const forms = document.querySelectorAll('form')

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'SUCCESS',
    failed: 'FAILED'
  }

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      postForm(form)
    })
  })

  async function postData(url, data) {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: data
    }) 

    if(!result.ok) {
      throw new Error('Проси')
    }

    return await result.json()
  }

  function postForm(form) {

    const spinner = document.createElement('img')
    spinner.src = message.loading
    spinner.style.cssText = `
      display: block;
      margin: 0 auto;
    `
    form.insertAdjacentElement('afterend', spinner)

    const formData = new FormData(form),
          json = Object.fromEntries(formData.entries())
    //       json = {}
    // formData.forEach((element, index) => {
    //   json[index] = element
    // })

    //localStorage.setItem(`"${json.name}"`, JSON.stringify(json.phone))
    //postData('http://localhost:3000/requests', json)
    axios.post('http://localhost:3000/requests', json)
    .then(() => {
      showThanksModal(message.success)
      spinner.remove()
    })
    .catch(() => {
      showThanksModal(message.failed)
    })
    .finally(() => {
      form.reset()
    })
  }
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog')
          
    prevModalDialog.classList.add('hide')
    prevModalDialog.classList.remove('show')
    openModal()

    const thansModal = document.createElement('div')
    thansModal.classList.add('modal__dialog')
    thansModal.innerHTML = `
      <div class="modal__content">
        <div data-modalclose="" class="modal__close">×</div>
        <div class="modal__title">${message}</div>
      </div>
    `
    modal.append(thansModal)
    setTimeout(() => {
      thansModal.remove()
      prevModalDialog.classList.remove('hide')
      prevModalDialog.classList.add('show')
      closeModal()
    }, 4000)
  }

})
