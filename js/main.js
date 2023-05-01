'use strict'

import { keyboard } from "./keyboard.js";

const keyboardKeys = Object.keys(keyboard)
const keyboardKeysRow1 = Object.keys(keyboard.row1)
const keyboardKeysRow2 = Object.keys(keyboard.row2)
const keyboardKeysRow3 = Object.keys(keyboard.row3)
const keyboardKeysRow4 = Object.keys(keyboard.row4)
const keyboardKeysRow5 = Object.keys(keyboard.row5)
const body = document.body

const container = document.createElement('div')
container.classList.add('container')
const virtualTablo = document.createElement('textarea')
virtualTablo.classList.add('virtual-tablo')
const virtualKeyboard = document.createElement('div')
virtualKeyboard.classList.add('virtual-keyboard')

body.prepend(container)
container.prepend(virtualKeyboard)
container.prepend(virtualTablo)

for(let i = 0; i < keyboardKeys.length; i++) {
  virtualKeyboard.innerHTML += `
    <div class="row"></row>
  `
}

const rows = document.querySelectorAll('.row')

for(let i = 0; i < keyboardKeysRow1.length; i++) {
  rows[0].innerHTML += `
    <div class="key ${keyboard.row1[keyboardKeysRow1[i]].name}">
      <div class="eng active">
        <span class="normal">${keyboard.row1[keyboardKeysRow1[i]].eng.normal}</span>
        <span class="shift hidden">${keyboard.row1[keyboardKeysRow1[i]].eng.shift}</span>
        <span class="caps hidden">${keyboard.row1[keyboardKeysRow1[i]].eng.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row1[keyboardKeysRow1[i]].eng.shiftCaps}</span>
      </div>
      <div class="rus">
        <span class="normal">${keyboard.row1[keyboardKeysRow1[i]].rus.normal}</span>
        <span class="shift hidden">${keyboard.row1[keyboardKeysRow1[i]].rus.shift}</span>
        <span class="caps hidden">${keyboard.row1[keyboardKeysRow1[i]].rus.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row1[keyboardKeysRow1[i]].rus.shiftCaps}</span>
      </div>
    </div>
  `
}

for(let i = 0; i < keyboardKeysRow2.length; i++) {
  rows[1].innerHTML += `
    <div class="key ${keyboard.row2[keyboardKeysRow2[i]].name}">
      <div class="eng active">
        <span class="normal">${keyboard.row2[keyboardKeysRow2[i]].eng.normal}</span>
        <span class="shift hidden">${keyboard.row2[keyboardKeysRow2[i]].eng.shift}</span>
        <span class="caps hidden">${keyboard.row2[keyboardKeysRow2[i]].eng.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row2[keyboardKeysRow2[i]].eng.shiftCaps}</span>
      </div>
      <div class="rus">
        <span class="normal">${keyboard.row2[keyboardKeysRow2[i]].rus.normal}</span>
        <span class="shift hidden">${keyboard.row2[keyboardKeysRow2[i]].rus.shift}</span>
        <span class="caps hidden">${keyboard.row2[keyboardKeysRow2[i]].rus.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row2[keyboardKeysRow2[i]].rus.shiftCaps}</span>
      </div>
    </div>
  `
}

for(let i = 0; i < keyboardKeysRow3.length; i++) {
  rows[2].innerHTML += `
    <div class="key ${keyboard.row3[keyboardKeysRow3[i]].name}">
      <div class="eng active">
        <span class="normal">${keyboard.row3[keyboardKeysRow3[i]].eng.normal}</span>
        <span class="shift hidden">${keyboard.row3[keyboardKeysRow3[i]].eng.shift}</span>
        <span class="caps hidden">${keyboard.row3[keyboardKeysRow3[i]].eng.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row3[keyboardKeysRow3[i]].eng.shiftCaps}</span>
      </div>
      <div class="rus">
        <span class="normal">${keyboard.row3[keyboardKeysRow3[i]].rus.normal}</span>
        <span class="shift hidden">${keyboard.row3[keyboardKeysRow3[i]].rus.shift}</span>
        <span class="caps hidden">${keyboard.row3[keyboardKeysRow3[i]].rus.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row3[keyboardKeysRow3[i]].rus.shiftCaps}</span>
      </div>
    </div>
  `
}

for(let i = 0; i < keyboardKeysRow4.length; i++) {
  rows[3].innerHTML += `
    <div class="key ${keyboard.row4[keyboardKeysRow4[i]].name}">
      <div class="eng active">
        <span class="normal">${keyboard.row4[keyboardKeysRow4[i]].eng.normal}</span>
        <span class="shift hidden">${keyboard.row4[keyboardKeysRow4[i]].eng.shift}</span>
        <span class="caps hidden">${keyboard.row4[keyboardKeysRow4[i]].eng.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row4[keyboardKeysRow4[i]].eng.shiftCaps}</span>
      </div>
      <div class="rus">
        <span class="normal">${keyboard.row4[keyboardKeysRow4[i]].rus.normal}</span>
        <span class="shift hidden">${keyboard.row4[keyboardKeysRow4[i]].rus.shift}</span>
        <span class="caps hidden">${keyboard.row4[keyboardKeysRow4[i]].rus.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row4[keyboardKeysRow4[i]].rus.shiftCaps}</span>
      </div>
    </div>
  `
}

for(let i = 0; i < keyboardKeysRow5.length; i++) {
  rows[4].innerHTML += `
    <div class="key ${keyboard.row5[keyboardKeysRow5[i]].name}">
      <div class="eng active">
        <span class="normal">${keyboard.row5[keyboardKeysRow5[i]].eng.normal}</span>
        <span class="shift hidden">${keyboard.row5[keyboardKeysRow5[i]].eng.shift}</span>
        <span class="caps hidden">${keyboard.row5[keyboardKeysRow5[i]].eng.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row5[keyboardKeysRow5[i]].eng.shiftCaps}</span>
      </div>
      <div class="rus">
        <span class="normal">${keyboard.row5[keyboardKeysRow5[i]].rus.normal}</span>
        <span class="shift hidden">${keyboard.row5[keyboardKeysRow5[i]].rus.shift}</span>
        <span class="caps hidden">${keyboard.row5[keyboardKeysRow5[i]].rus.caps}</span>
        <span class="shiftCaps hidden">${keyboard.row5[keyboardKeysRow5[i]].rus.shiftCaps}</span>
      </div>
    </div>
  `
}

/* Прокидываю классы ширины кнопки */

document.querySelector('.Backspace').classList.add('flex-1')
document.querySelector('.Tab').classList.add('flex-1')
document.querySelector('.CapsLock').classList.add('flex-1')
document.querySelector('.ShiftRight').classList.add('flex-1')
document.querySelector('.ShiftLeft').classList.add('flex-2')
document.querySelector('.Enter').classList.add('flex-1')
document.querySelector('.Space').classList.add('flex-4')
document.querySelector('.Backslash').classList.add('flex-1')
document.querySelector('.ControlLeft').classList.add('flex-1')
document.querySelector('.ControlRight').classList.add('flex-1')
document.querySelector('.AltLeft').classList.add('flex-1')
document.querySelector('.AltRight').classList.add('flex-1')

let langKeyboard = 'eng'

document.addEventListener('keydown', function(event) {
  const button = document.querySelector(`.${event.code}`)
  activeButton(button, event)
  if(event.code === 'ShiftLeft') {
    pressShift()
  }
  if(event.code === 'CapsLock') {
    pressCaps()
  }
  focusTablo()

  console.log(event)
})

document.addEventListener('keyup', function(event) {
  event.preventDefault()
  const button = document.querySelector(`.${event.code}`)
  reActiveButton(button, event)
  if(event.code === 'ShiftLeft') {
    unPressShift()
  }
  focusTablo()
  switchLang(event)
})

virtualKeyboard.addEventListener('mousedown', function(event) {
  activeButton(event.target.closest('.key'))
  focusTablo()
  if(event.shiftKey) {
    virtualTablo.value += event.target.closest('.key').querySelector('.active .shift').textContent
  }
})

virtualKeyboard.addEventListener('mouseup', function(event) {
  reActiveButton(event.target.closest('.key'))
  focusTablo()
})

function activeButton(element, event) {
  if(event.code === 'CapsLock') {
    element.classList.contains('press') ? element.classList.remove('press') : element.classList.add('press')
  } else {
    element.classList.add('press')
  }
}

function reActiveButton(element, event) {
  if(event.code !== 'CapsLock') {
    element.classList.remove('press')
  }
}

function handlerMouse(element) {
  
}

function print() {
  // if(event.code !== 'Backspace' &&
  //   event.code !== 'CapsLock' &&
  //   event.code !== 'ControlLeft' &&
  //   event.code !== 'ControlRight' &&
  //   event.code !== 'ShiftLeft' &&
  //   event.code !== 'MetaLeft'
  // ) {

  // }
  virtualTablo.value += element.querySelector('.active .normal').textContent
}

function focusTablo() {
  virtualTablo.focus()
}

function switchLang(event) {

  if(event.code === 'AltLeft' && event.shiftKey || 
     event.code === 'AltRight' && event.shiftKey ||
     event.code === 'ShiftLeft' && event.altKey ||
     event.code === 'ShiftRight' && event.altKey) {
    langKeyboard === 'eng' ? langKeyboard = 'rus' : langKeyboard = 'eng'
  }

  const activeKeys = document.querySelectorAll('.key div')

  activeKeys.forEach(btn => {
    btn.classList.contains(langKeyboard) ? btn.classList.add('active') : btn.classList.remove('active')
  });

}

function pressShift() {
  let allActiveKeys = document.querySelectorAll('.key .active span')
  allActiveKeys.forEach(element => {
    element.classList.contains('shift') ? element.classList.remove('hidden') : element.classList.add('hidden')
  });
}

function unPressShift() {
  let allActiveKeys = document.querySelectorAll('.key .active span')
  allActiveKeys.forEach(element => {
    element.classList.contains('normal') ? element.classList.remove('hidden') : element.classList.add('hidden')
  });
}

function pressCaps() {
  let allActiveKeys = document.querySelectorAll('.key .active span')
  allActiveKeys.forEach(element => {
    element.classList.contains('caps') ? element.classList.remove('hidden') : element.classList.add('hidden')
  });
}

function unPressCaps() {
  let allActiveKeys = document.querySelectorAll('.key .active span')
  allActiveKeys.forEach(element => {
    element.classList.contains('normal') ? element.classList.remove('hidden') : element.classList.add('hidden')
  });
}