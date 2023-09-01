const buttonYes = document.getElementById('buttonYes')
const buttonNo = document.getElementById('buttonNo')

function getRandomPosition(min, max) {
  return `${Math.random() * (max - min) + min}%`
}

buttonNo.addEventListener('mouseover', () => {
  buttonNo.style.position = "absolute"
  buttonNo.style.bottom = getRandomPosition(0, 90)
  buttonNo.style.left = getRandomPosition(0, 80)
})

buttonYes.addEventListener('click', () => {
  document.querySelector('body').innerHTML = '<h1>Eu sabia que você iria aceitar meu amor, Te amo!</h1>'
})