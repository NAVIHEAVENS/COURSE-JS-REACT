'use strict'

document.addEventListener('DOMContentLoaded', () => {

  class MenuCard {
    constructor(img, altimg, title, descr, price, parent, ...rest) {
      this.img = img,
      this.altimg = altimg,
      this.title = title,
      this.descr = descr,
      this.price = price * 29,
      this.parent = document.querySelector(parent),
      this.rest = rest
    }

    render() {
      let card = document.createElement('div')
      if(this.rest.length) {
        this.rest.forEach(element => card.classList.add(element))
      } else {
        card.classList.add('menu__item')
      }    
      card.innerHTML = 
      `
      <img src=${this.img} alt=${this.altimg}>
      <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
      </div>
      `
      this.parent.append(card)
    }
  }

  async function getCard(url) {
    const result = await fetch(url)

    if(!result.ok) {
      throw new Error(`${url} ${result.status}`)
    }

    return await result.json()
  }

  // getCard('http://localhost:3000/menu').then(data => {
  //   console.log(data)
  //   data.forEach(({img, altimg, title, descr, price}) => {
  //     new MenuCard(img, altimg, title, descr, price, '[data-cards]').render()
  //   })
  // })

  axios.get('http://localhost:3000/menu').then(response => {
    response.data.forEach(({img, altimg, title, descr, price}) => {
      new MenuCard(img, altimg, title, descr, price, '[data-cards]').render()
    })
  })

})