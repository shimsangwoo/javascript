// console.log('hello');
const bg = ['orange', 'blue', 'red', 'black', 'yellow', 'green']
const hex = [0, 1, 2, 3, 4, 5, , 6, 7, 8, a, b, c, d, e, f]
const hexBtn = document.getElementById('hexBtn')
const bgBtn = document.getElementById('gbBtn')
const color = document.querySelector('.color')

console.log(bg)
console.log(bgBtn)
console.log(color)

// console.log(Math.PI)

function getBgNum() {
  return Math.floor(Math.random() * bg.length)
}

function getHexNum() {
  return Math.floor(Math.random() * hex.length)
}

bgBtn.addEventListener('click', () => {
  const randomBgNum = getBgNum()
  console.log(randomBgNum)
  document.body.style.backgroundColor = bg[randomBgNum]
  color.textContent = bg[randomBgNum]
})

hexBtn.addEventListener('click', () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getHexNum()]
  }
})

document.body.style.backgroundColor = hexcolor
color.textContent = hexColor
console.log(hexcolor)
