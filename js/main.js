import { keyboard } from './keyboard.js';

const keyboardKeys = Object.keys(keyboard);
const keyboardKeysRow1 = Object.keys(keyboard.row1);
const keyboardKeysRow2 = Object.keys(keyboard.row2);
const keyboardKeysRow3 = Object.keys(keyboard.row3);
const keyboardKeysRow4 = Object.keys(keyboard.row4);
const keyboardKeysRow5 = Object.keys(keyboard.row5);
const { body } = document;

const container = document.createElement('div');
container.classList.add('container');
const virtualTablo = document.createElement('textarea');
virtualTablo.classList.add('virtual-tablo');
const virtualKeyboard = document.createElement('div');
virtualKeyboard.classList.add('virtual-keyboard');

body.prepend(container);
container.prepend(virtualKeyboard);
container.prepend(virtualTablo);
container.insertAdjacentHTML('beforeend', '<div>Для смены языка alt+shift</div>');

for (let i = 0; i < keyboardKeys.length; i += 1) {
  virtualKeyboard.innerHTML += `
    <div class="row"></row>
  `;
}

const rows = document.querySelectorAll('.row');

for (let i = 0; i < keyboardKeysRow1.length; i += 1) {
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
  `;
}

for (let i = 0; i < keyboardKeysRow2.length; i += 1) {
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
  `;
}

for (let i = 0; i < keyboardKeysRow3.length; i += 1) {
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
  `;
}

for (let i = 0; i < keyboardKeysRow4.length; i += 1) {
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
  `;
}

for (let i = 0; i < keyboardKeysRow5.length; i += 1) {
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
  `;
}

/* Прокидываю классы ширины кнопки */

document.querySelector('.Backspace').classList.add('flex-1');
document.querySelector('.Tab').classList.add('flex-1');
document.querySelector('.CapsLock').classList.add('flex-1');
document.querySelector('.ShiftRight').classList.add('flex-1');
document.querySelector('.ShiftLeft').classList.add('flex-2');
document.querySelector('.Enter').classList.add('flex-1');
document.querySelector('.Space').classList.add('flex-4');
document.querySelector('.Backslash').classList.add('flex-1');
document.querySelector('.ControlLeft').classList.add('flex-1');
document.querySelector('.ControlRight').classList.add('flex-1');
document.querySelector('.AltLeft').classList.add('flex-1');
document.querySelector('.AltRight').classList.add('flex-1');

let langKeyboard = 'eng';

document.addEventListener('keydown', (event) => {
  if (event.code !== 'Backspace'
     && event.code !== 'Space'
     && event.code !== 'ArrowLeft'
     && event.code !== 'ArrowRight'
     && event.code !== 'ArrowUp'
     && event.code !== 'ArrowDown'
     && event.code !== 'Enter'
  ) {
    event.preventDefault();
  }

  // Подсветка активных клавиш

  if (event.code === 'CapsLock') {
    if (document.querySelector(`.${event.code}`).classList.contains('press')) {
      document.querySelector(`.${event.code}`).classList.remove('press');
    } else {
      document.querySelector(`.${event.code}`).classList.add('press');
    }
  } else {
    document.querySelector(`.${event.code}`).classList.add('press');
  }

  // Переключение клавиатуры в режим CapsLock

  if (event.getModifierState('CapsLock')) {
    document.querySelectorAll('.key .active span').forEach((element) => {
      if (element.classList.contains('caps')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  } else {
    document.querySelectorAll('.key .active span').forEach((element) => {
      if (element.classList.contains('normal')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  }

  // Переключение клавиатуры в режиме Shift

  if (event.shiftKey && !event.getModifierState('CapsLock')) {
    document.querySelectorAll('.key .active span').forEach((element) => {
      if (element.classList.contains('shift')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  } else if (event.shiftKey && event.getModifierState('CapsLock')) {
    document.querySelectorAll('.key .active span').forEach((element) => {
      if (element.classList.contains('shiftCaps')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  }

  // Фокусировка на табло

  virtualTablo.focus();

  // Печать на табло

  if (event.code !== 'CapsLock'
     && event.code !== 'Tab'
     && event.code !== 'ShiftLeft'
     && event.code !== 'ShiftRight'
     && event.code !== 'ControlLeft'
     && event.code !== 'ControlRight'
     && event.code !== 'AltLeft'
     && event.code !== 'AltRight'
     && event.code !== 'MetaLeft'
     && event.code !== 'Backspace'
     && event.code !== 'ArrowRight'
     && event.code !== 'ArrowLeft'
     && event.code !== 'ArrowUp'
     && event.code !== 'ArrowDown'
     && event.code !== 'Enter'
  ) {
    document.querySelectorAll(`.${event.code} .active span`).forEach((element) => {
      if (!element.classList.contains('hidden')) {
        virtualTablo.value += element.textContent;
      }
    });
  }

  // Переключение языка

  if (event.shiftKey && event.altKey) {
    if (langKeyboard === 'eng') {
      langKeyboard = 'rus';
    } else {
      langKeyboard = 'eng';
    }
    document.querySelectorAll('.key div').forEach((el) => {
      if (el.classList.contains(langKeyboard)) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

// console.log(event)
});

document.addEventListener('keyup', (event) => {
  // Снятие подсветки с ранее активных клавиш
  if (event.code !== 'CapsLock') {
    document.querySelector(`.${event.code}`).classList.remove('press');
  }

  // Возвращение клавиатуры из режима shift
  if (!event.shiftKey && !event.getModifierState('CapsLock')) {
    document.querySelectorAll('.key .active span').forEach((element) => {
      if (element.classList.contains('normal')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  } else if (!event.shiftKey && event.getModifierState('CapsLock')) {
    document.querySelectorAll('.key .active span').forEach((element) => {
      if (element.classList.contains('caps')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  }
});

// Управление клавиатурой с помощью мыши

virtualKeyboard.addEventListener('mousedown', (event) => {
  // Подсветка активных клавиш

  if (event.target.closest('.key').classList.contains('CapsLock')) {
    event.target.closest('.key').classList.toggle('press');
  } else {
    event.target.closest('.key').classList.add('press');
  }

  // Включение режима shift

  if (event.target.closest('.key').classList.contains('ShiftLeft')) {
    document.querySelectorAll('.key .active span').forEach((el) => {
      if (el.classList.contains('shift')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }

  // Фокусировка на табло

  virtualTablo.focus();

  // Печать на табло

  if (!event.target.closest('.key').classList.contains('Tab')
     && !event.target.closest('.key').classList.contains('CapsLock')
     && !event.target.closest('.key').classList.contains('ShiftLeft')
     && !event.target.closest('.key').classList.contains('ControlLeft')
     && !event.target.closest('.key').classList.contains('MetaLeft')
     && !event.target.closest('.key').classList.contains('AltLeft')
     && !event.target.closest('.key').classList.contains('AltRight')
     && !event.target.closest('.key').classList.contains('Backspace')
     && !event.target.closest('.key').classList.contains('Enter')
     && !event.target.closest('.key').classList.contains('ShiftRight')
     && !event.target.closest('.key').classList.contains('ControlRight')
  ) {
    event.target.closest('.key').querySelectorAll('.active span').forEach((element) => {
      if (!element.classList.contains('hidden')) {
        virtualTablo.value += element.textContent;
      }
    });
  }

  if (event.target.closest('.key').classList.contains('Tab')) {
    virtualTablo.value += '    ';
  }

  if (event.target.closest('.key').classList.contains('Backspace')) {
    virtualTablo.value = virtualTablo.value.slice(0, -1);
  }

// console.log(event.target.closest('.key'))
});

virtualKeyboard.addEventListener('mouseup', (event) => {
  // Снятие подсветки с активных клавиш

  if (!event.target.closest('.key').classList.contains('CapsLock')) {
    event.target.closest('.key').classList.remove('press');
  }

  // Выключение режима shift

  if (event.target.closest('.key').classList.contains('ShiftLeft')) {
    document.querySelectorAll('.key .active span').forEach((el) => {
      if (el.classList.contains('normal')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }
});

// Переключение клавиатуры в CapsLock режим

document.querySelector('.CapsLock').addEventListener('click', () => {
  if (document.querySelector('.CapsLock').classList.contains('press')) {
    document.querySelectorAll('.key .active span').forEach((el) => {
      if (el.classList.contains('caps')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  } else {
    document.querySelectorAll('.key .active span').forEach((el) => {
      if (el.classList.contains('normal')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }
});
