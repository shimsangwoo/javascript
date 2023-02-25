const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = 'f09adb51'
const APP_KEY = '693caf214eaed3914e92764fddd3500f'

function paintRecipe(items) {
  // console.log(items)
  let foods = ''
  items.map((item) => {
    console.log(item)
    foods += `<div class="food">
          <div class="food_img"></div>
          <img src="${item.recipe.image}" alt="" />
        </div>
        <div class="food_info"></div>
        <h3>${item.recipe.label}</h3>
        <a href="#x">view recipe</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo aliquid voluptatem fugiat ipsa debitis cupiditate quo aspernatur saepe autem.</p>
        `
  })

  foodList.innerHTML = foods
}
function getRecipe(query) {
  //   console.log(query)
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&`

  fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => paintRecipe(data.hits))
}

/*
자료를 받아오는데 시간이 걸린다.
그동안 다음단계로 넘어간다.
이러한 것을 '비동기'라고 함
메소드 then

response-->res 응답 받은 것
request -->req 요청하기

*/

function init() {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const query = input.value
    getRecipe(query)
  })
}

init()
