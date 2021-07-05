const resultBox = document.querySelector("#result-box")
const table1 = document.querySelector("#table1")
const table2 = document.querySelector("#table2")
const nextButton = document.querySelector("#next")
const previousButton = document.querySelector("#previous")
const buttons = document.querySelectorAll("button")
let result = ""
const buttonsArray = Array.from(buttons)
buttonsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    let inputText = e.target.innerText
    if (inputText === "=") {
      resultBox.value = result
      resultBox.value = eval(result)
      result = resultBox.value
    } else if (inputText === "C") {
      result = ""
      resultBox.value = result
    } else if (inputText === "CE") {
      resultBox.value = result.substring(0, result.length - 1)
      result = resultBox.value
    } else if (inputText == "sin") {
      let sinResult = Math.sin((Math.PI / 180) * resultBox.value)
      resultBox.value = sinResult
      result = resultBox.value
    } else if (inputText == "cos") {
      let cosResult = Math.cos((Math.PI / 180) * resultBox.value)
      resultBox.value = cosResult
      result = resultBox.value
    } else if (inputText == "tan") {
      let tanResult = Math.tan((Math.PI / 180) * resultBox.value)
      resultBox.value = tanResult
      result = resultBox.value
    } else if (inputText == "e") {
      let eResult = Math.exp(resultBox.value)
      resultBox.value = eResult
      result = resultBox.value
    } else if (inputText == "1/x") {
      let xResult = 1 / resultBox.value
      resultBox.value = xResult
      result = resultBox.value
    } else if (inputText == "log") {
      let logResult = Math.log10(resultBox.value)
      resultBox.value = logResult
      result = resultBox.value
    } else if (inputText == "ln") {
      let lnResult = Math.log10(resultBox.value) / Math.log10(Math.E)
      resultBox.value = lnResult
      result = resultBox.value
    } else if (inputText == "Π") {
      let piresult = null
      if (resultBox.value == "") {
        resultBox.value = Math.PI
        result = resultBox.value
      } else {
        piResult = Math.PI * resultBox.value
        resultBox.value = piResult
        result = resultBox.value
      }
    } else {
      result = result + inputText
      resultBox.value = result
    }
  })
})
nextButton.addEventListener("click", (e) => {
  table1.classList.add("none")
  table2.classList.remove("none")
  nextButton.classList.add("none")
})
previousButton.addEventListener("click", (e) => {
  table1.classList.remove("none")
  table2.classList.add("none")
})

buttonsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.classList.add("animation")
    setTimeout(() => {
      button.classList.remove("animation")
    }, 600)
  })
})
