// console.log('hello')
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.screenY > 0)
  console.log(window.screenY)
})
