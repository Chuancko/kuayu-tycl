//JSONP
function jsonp(url) {
  return new Promise((resolver, reject) => {
    const random = 'JsonpCallBackName' + Math.random()
    window[random] = (data) => {
      resolver(data)
    }
    const script = document.createElement('script')
    script.src = `${url}?callback=${random}`
    script.onload = () => {
      script.remove()
    }
    script.onerror = () => {
      reject()
    }
    document.body.appendChild(script)
  })
}

jsonp('http://qq.com:8886/friends.js').then((data) => {
  console.log(data)
})

//CORS
// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'http://qq.com:8888/friends.json')
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.response)
//   }
// }
// xhr.send()
