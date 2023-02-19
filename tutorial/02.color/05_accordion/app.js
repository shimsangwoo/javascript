console.log('hello')

const content = document.querySelectorAll('.content')

for (let i = 0; i < content.length; i++) {
  content[i].addEventListener('click', function () {
    console.log(this)
    this.classList.toggle
  })
}

// for (let i = 0; i < content.length; i++) {
//     content[i].addEventListener('click', () => {
//       console.log(this)
//     })
//   }
