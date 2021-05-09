const html = document.querySelector('html')
const btn = document.getElementById('btn')
const reset = document.getElementById('reset')
const changeColor = document.getElementById('changeColor')
const span = document.querySelectorAll('span')
const links = document.querySelectorAll('header li')
const circles = document.querySelectorAll('.circle');

btn.addEventListener('click', () => {
  span.forEach((stick, index) => {
    stick.classList.toggle(`stick${index + 1}`)
  })
  links.forEach((link) => {
    link.classList.toggle('opacity')
  })
});



circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    let hue = Math.floor(Math.random() * 361);
    let saturation = 80 + Math.floor(Math.random() * 20);
    let lightness = 50 + Math.floor(Math.random() * 30);
    circle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });
});

reset.addEventListener('click', () => {
  circles.forEach((circle) => {
    circle.style.backgroundColor = '#fff'
    circle.style.boxShadow = "4px 4px 10px rgba(176, 196, 222, 1)"
    html.style.backgroundColor =  'hsla(180, 30%, 80%)';
  })
  
})

changeColor.addEventListener('click', () => {
  let saturation = 80 + Math.floor(Math.random() * 20);
  let lightness = 50 + Math.floor(Math.random() * 30);
  let hue = Math.floor(Math.random() * 361);
  circles.forEach((circle) => {
    circle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    html.style.backgroundColor = `hsl(${hue + 60}, ${saturation - 20}%, ${lightness + 10}%)`
  })
})


