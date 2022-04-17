'use strict'

// XMLHttpRequest
function XMLData() {
  const request = XMLHttpRequest()
  request.open('POST', 'server.php')
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')

  const formData = new FormData
  const jsonData = JSON.stringify(Object.fromEntries(formData.entries()))
   
  request.send(jsonData)
  request.addEventListener('readyStateChange', () => {
    if(request.status === 200 && request.readyState === 4) {
      console.log(request.request)
    }
  })
}


// Fetch
const form = document.querySelector('form')

async function fetchPostData(form) {
  const formData = new FormData,
      jsonData = JSON.stringify(Object.fromEntries(formData.entries()))

const request = await fetch('sever.php', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  },
  body: jsonData
})
  if(!request.ok) {
    throw new Error('Error')
  }

  return await request.json()
}

fetchPostData(form)
.then(data => console.log(data))
.catch(() => console.error('Error'))
.finally(() => console.log('Finally'))



// Axios


function axiosPostData(form) {
  const formData = new FormData(form),
        data = Object.fromEntries(formData.entries())

axios.post('server.php', data)
.then(data => console.log(data))
}










slideIndex += 1 
slideIndex = slideIndex + 1
