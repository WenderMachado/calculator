const input = document.querySelector('#input')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
import calculate from "./calculate.js"

export function handleButtonPress(ev){

  const value = ev.currentTarget.dataset.value
  input.value += value
}

export function clear(){
  input.value = ''
  input.focus()
}

export function keydownPress(ev){
    ev.preventDefault()
  
    if(allowedKeys.includes(ev.key)){
      input.value += ev.key
      return
    }
    if(ev.key === "Backspace"){
      input.value = input.value.slice(0, -1)
    }
    if(ev.key === "Enter"){
     calculate()
    }
  }
