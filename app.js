const btnTranslate = document.querySelector("#btn-translate")
const inputTxt = document.querySelector("#input-txt")
const outputDiv = document.querySelector("#output-div")

const grootServerUrL = "https://api.funtranslations.com/translate/groot.json"

const eventHandler = () => {
  const userInput = grootServerUrL + "?text=" + inputTxt.value

  fetch(userInput)
  .then(res => res.json())
  .then(data =>  outputDiv.innerText = data.contents.translated)
  .catch(() => console.log("There is some problem with the server"))
}

btnTranslate.addEventListener("click", eventHandler)