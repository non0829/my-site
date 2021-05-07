const btn = document.getElementById('btn')
const span = document.querySelectorAll('span')
const links = document.querySelectorAll('header li')
const circles = document.querySelectorAll('.circle');

btn.addEventListener('click', () => {
  console.log('aaa')
  span.forEach((stick, index) => {
    stick.classList.toggle(`stick${index + 1}`)
  })
  links.forEach((link) => {
    link.classList.toggle('opacity')
  })
});


circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    circle.classList.toggle('display')
  })
});



