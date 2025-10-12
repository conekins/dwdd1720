const btnRed = document.querySelector("#redImage")
const btnGreen = document.querySelector("#greenImage")

const pageBody = document.querySelector("div")

btnRed.addEventListener('click', () => pageBody.className = "paintRed")
btnGreen.addEventListener('click', () => pageBody.className = "paintGreen")