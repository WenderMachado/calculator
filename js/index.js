
import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { clear, handleButtonPress, keydownPress } from "./kayHandlers.js"
import switchTheme from "./switchTheme.js"




document.querySelectorAll('.charKey').forEach((charKeyBtn)=>{
  charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', clear )

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('input').addEventListener('keydown', keydownPress)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

document.getElementById('themeSwitcher').addEventListener('click', switchTheme )

