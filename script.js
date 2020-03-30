//create wrapper (and inner elements) for keyboard and add it on the page
const WRAPPER = document.createElement('div');
const TEXTAREA = document.createElement('textarea');
const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard-wrapper');
WRAPPER.classList.add('wrapper');
const BODY = document.querySelector('body');
BODY.appendChild(WRAPPER);
WRAPPER.appendChild(TEXTAREA);
WRAPPER.appendChild(KEYBOARD);

//const KEYS_CODES = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 219, 93, 92, 46, 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 222, 13, 16, 122, 120, 99, 118, 98, 110, 109, 44, 190, 47, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];


// const KEYS_CODES = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17]


// const KEYS = ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
//     'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Delete',
//     'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',
//     "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", 'ArrowUp', "Shift",
//     "Control", "Meta", "Alt", "Space", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Control"
// ]


const KEYS = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",

    "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",

    "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",

    "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",

    "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"
]


const KEYS_SHOW_EN = ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
    'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Delete',
    'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", 'ArrowUp', "Shift",
    "Control", "Meta", "Alt", "Space", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Control"
]
const KEYS_SHOW_EN_CAPS = ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace',
    'Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", 'Delete',
    'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', 'Enter',
    "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", 'ArrowUp', "Shift",
    "Control", "Meta", "Alt", "Space", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Control"
]
const KEYS_SHOW_RUS = ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
    'Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'Delete',
    'CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',
    "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", 'ArrowUp', "Shift",
    "Control", "Meta", "Alt", "Space", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Control"
]
const KEYS_SHOW_RUS_CAPS = ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace',
    'Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", 'Delete',
    'CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',
    "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", 'ArrowUp', "Shift",
    "Control", "Meta", "Alt", "Space", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Control"
]
const KEY_WHICH = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17]
    // подскахка о сочитании клавиш
    // посинить раскладку (руз англ)  + ввод данных с виртуал клавы
    // let arr = []
    // document.addEventListener('keyup', (e) => {
    //     arr.push(e.which)
    //     console.log(arr)
    // })

let isEng = JSON.parse(localStorage.getItem('isEng'));
let isCapsLock = false;

// add keys on keyboard
const addKeysOnKeyboard = () => {
    KEYBOARD.querySelectorAll('span').forEach(item => {
        item.remove();
    })

    KEY_WHICH.forEach((key, index) => {
        let keyValue = '';

        if (isEng && isCapsLock) {
            keyValue = KEYS_SHOW_EN_CAPS[index];
        } else if (isEng) { keyValue = KEYS_SHOW_EN[index]; }
        if (!isEng && isCapsLock) {
            keyValue = KEYS_SHOW_RUS_CAPS[index];
        } else if (!isEng) { keyValue = KEYS_SHOW_RUS[index]; }

        let keyClass = 'key ';
        if (index == 14 || index == 29 || index == 42 || index == 55) {
            KEYBOARD.innerHTML += '<span style="clear: both; display: block; width: 100%"></span>';
        }
        if (key == 8) {
            keyValue = 'Backspace';
            keyClass += 'long-control-key control-key-background';
        }
        if (key == 9) {
            keyValue = 'Tab';
            keyClass += 'short-control-key control-key-background';
        }
        if (key == 46) {
            keyValue = 'Del';
            keyClass += 'control-key-background';
        }
        if (key == 20) {
            keyValue = 'CapsLock';
            keyClass += 'long-control-key control-key-background';
        }
        if (key == 13) {
            keyValue = 'Enter';
            keyClass += 'long-control-key control-key-background';
        }
        if (key == 16 || key == 'ShiftRight') {
            keyValue = 'Shift';
            keyClass += 'long-control-key control-key-background';
        }
        if (key == 17 || key == 'ControlRight') {
            keyValue = 'Ctrl';
            keyClass += 'short-control-key control-key-background';
        }
        if (key == 91 || key == 'MetaRight') {
            keyValue = 'Win';
            keyClass += 'short-control-key control-key-background';
        }
        if (key == 18 || key == 'AltRight') {
            keyValue = 'Alt';
            keyClass += 'short-control-key control-key-background';
        }
        if (key == ' ' || key == 'Space' || key == 32) {
            keyValue = " ";
            keyClass += 'backspace-key';
        }
        if (key == 38) {
            keyValue = '&uarr;';
            keyClass += 'short-control-key control-key-background';
        }
        if (key == 37) {
            keyValue = '&larr;';
            keyClass += 'short-control-key control-key-background';
        }
        if (key == 40) {
            keyValue = '&darr;';
            keyClass += 'short-control-key control-key-background';
        }
        if (key == 39) {
            keyValue = '&rarr;';
            keyClass += 'short-control-key control-key-background';
        }
        KEYBOARD.innerHTML += `<span class="${keyClass}" data=${key} id="${keyValue.charCodeAt()}"> ${keyValue} </span>`;

    });
}
document.addEventListener('onload', addKeysOnKeyboard());


// let cursorPosition = INPUT.selectionStart;
//   const cursorPositionEnd = INPUT.selectionEnd;
// вот эти два свойства отвечают за курсор и выделение, с ними можно играться
// удалить блок текста - можно достаточно просто)

function keyDownHendler(event) {
    event.preventDefault();
    if (!document.querySelector('span.key[data="' + event.which + '"]')) { return; } else {
        document.querySelector('span.key[data="' + event.which + '"]').classList.add('active');
    }
}

function keyUpHendler(event) {
    event.preventDefault();
    // console.log(event)
    document.querySelectorAll('.wrapper .key').forEach(item => {
        item.classList.remove('active');
    });

    let ew = event.which;
    let text = '';
    let index = KEY_WHICH.indexOf(event.which)
    if (isEng && isCapsLock) {
        text = KEYS_SHOW_EN_CAPS[index];
    } else if (isEng) { text = KEYS_SHOW_EN[index]; }
    if (!isEng && isCapsLock) {
        text = KEYS_SHOW_RUS_CAPS[index];
    } else if (!isEng) { text = KEYS_SHOW_RUS[index]; }

    if (event.key !== "Control" && event.key !== 'Alt' && event.key !== 'Shift' && event.code !== 'MetaLeft' && event.code !== 'Tab' && event.key !== "CapsLock" && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Enter' && event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight'&& event.code !== 'Space') {
        // console.log('-------------')
        TEXTAREA.value += text;
    } else {
        if (ew === 20) {
            isCapsLock = !isCapsLock;
            addKeysOnKeyboard();
        }
        if ((event.code === 'AltLeft' && event.shiftKey) || (event.altKey && event.code === 'ShiftLeft')) {
            isEng = !isEng;
            localStorage.setItem('isEng', isEng);
            addKeysOnKeyboard();
        }
        if (event.key === 'Enter') {
            TEXTAREA.value += "df"
        }
        if (event.key === 'Backspace') {
            TEXTAREA.value = TEXTAREA.value.slice(0, -1);
        }
        if (event.code === 'Space') {
            TEXTAREA.value += ' ';
        }
        if (event.key === 'Delete') {
            TEXTAREA.value = TEXTAREA.value.slice(0, -1);
        }
        if (event.key === 'Tab') {
             
            TEXTAREA.value += '    ';
        }
        
        if (event.key === 'ArrowRight') {
            // alert('dw')
            TEXTAREA.value += ' ';
        }
        if (event.key === 'ArrowLeft') {
            // alert('dw')
            TEXTAREA.value += ' ';
        }
    }

}

document.addEventListener('click', () => {
    KEYBOARD.querySelectorAll('span').forEach(item => {
        item.onclick = function() {
            item.classList.remove('active');
        }
        item.onmousedown = function() {
            item.classList.add('active');
            if (item.innerText.length == 0) TEXTAREA.value += " ";
            if (item.innerText == 'CapsLock') {
                isCapsLock = !isCapsLock;
                addKeysOnKeyboard();
            } else
                TEXTAREA.value += item.innerText;
        }
    })

})


document.addEventListener('keyup', (event) => keyUpHendler(event));
// document.addEventListener('keypress', (event) => keyUpHendler(event));
document.addEventListener('keydown', (event) => keyDownHendler(event));
// document.addEventListener('keydown', (event) => keyDownHendler(event));