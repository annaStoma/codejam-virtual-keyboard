import KEYS from './src/data.js';

class Keyboard {
    constructor() {
        this.isEng = JSON.parse(localStorage.getItem('isEng'));
        this.isCapsLock = false;
        this.isShift = false;
        this.KEY_CODE = KEYS.KEY_CODE;
        this.KEYS_SHOW_EN = KEYS.KEYS_SHOW_EN;
        this.KEYS_SHOW_EN_CAPS = KEYS.KEYS_SHOW_EN_CAPS;
        this.KEYS_SHOW_RUS = KEYS.KEYS_SHOW_RUS;
        this.KEYS_SHOW_RUS_CAPS = KEYS.KEYS_SHOW_RUS_CAPS;
        this.KEY_WHICH = KEYS.KEY_WHICH;
    }
    createDOM() {
        this.TEXTAREA = document.createElement('textarea');
        this.WRAPPER = document.createElement('div');
        this.KEYBOARD = document.createElement('div');
        this.KEYBOARD.classList.add('keyboard-wrapper');
        this.WRAPPER.classList.add('wrapper');
        const BODY = document.querySelector('body');
        BODY.appendChild(this.WRAPPER);
        this.WRAPPER.appendChild(this.TEXTAREA);
        this.WRAPPER.appendChild(this.KEYBOARD);
        this.BUTTON = document.createElement('button');
        this.BUTTON.innerText = 'Сlear input field';
        this.BUTTON.classList.add('button-clean');
        this.WRAPPER.appendChild(this.BUTTON);
        this.BUTTON = document.querySelector('button');
        this.BUTTON.addEventListener('click', () => {
            this.TEXTAREA.value = '';
        });
        this.HELPER = document.createElement('div');
        this.HELPER.innerHTML = '<div>Ctrl + alt - change language</div><div>WINDOWS OS</div>';
        this.HELPER.classList.add('helper');
        this.WRAPPER.appendChild(this.HELPER);
    }

    changeCaseLayout(keyValue, index, isEng, isCapsLock, isShift) {
        if (isEng) keyValue = this.KEYS_SHOW_EN[index];
        if (isEng && isCapsLock) keyValue = this.KEYS_SHOW_EN_CAPS[index];
        if (isShift && isEng && isCapsLock) keyValue = this.KEYS_SHOW_EN[index];
        else if (isEng && isShift) keyValue = this.KEYS_SHOW_EN_CAPS[index];
        if (!isEng) keyValue = this.KEYS_SHOW_RUS[index];
        if (!isEng && isCapsLock) keyValue = this.KEYS_SHOW_RUS_CAPS[index];
        if (isShift && !isEng && isCapsLock) keyValue = this.KEYS_SHOW_RUS[index];
        else if (!isEng && isShift) keyValue = this.KEYS_SHOW_RUS_CAPS[index];
        return keyValue;
    }

    addKeysOnKeyboard() {
        this.KEYBOARD.querySelectorAll('span').forEach(item => {
            item.remove();
        })
        this.KEY_WHICH.forEach((key, index) => {
            let keyValue = '';
            keyValue = this.changeCaseLayout(keyValue, index, this.isEng, this.isCapsLock, this.isShift);

            let keyClass = 'key ';
            if (index == 14 || index == 29 || index == 42 || index == 55) {
                this.KEYBOARD.innerHTML += '<span style="clear: both; display: block; width: 100%"></span>';
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
            if (key == 38 || key == 40 || key == 37 || key == 39)
                keyClass += 'short-control-key control-key-background';

            this.KEYBOARD.innerHTML += `<span class="${keyClass}" data=${key} datacode=${this.KEY_CODE[index]} id="${keyValue.charCodeAt()}"> ${keyValue} </span>`;
        });

        let shiftLeft = document.querySelector('span.key[datacode="ShiftLeft"]');
        let shifRight = document.querySelector('span.key[datacode="ShiftRight"]');
        if (this.isShift == true) {
            if (event.code === 'ShiftLeft') shiftLeft.classList.add('active-shift');
            else if (event.code === 'ShiftRight') shifRight.classList.add('active-shift');
        }
        this.CAPSLOCK = document.getElementById('67');

        if (this.isCapsLock)
            this.CAPSLOCK.classList.add('active-shift');
        else this.CAPSLOCK.classList.remove('active-shift');

    }

    keyUpHendler(event) {
        event.preventDefault();
        document.querySelectorAll('.key').forEach(item => {
            let item_data = item.getAttribute('datacode');
            if (item_data == event.code)
                item.classList.remove('active');
        });
        if ((event.code === 'AltLeft' && event.ctrlKey) || (event.altKey && event.code === 'ControlLeft')) {
            this.isEng = !this.isEng;
            localStorage.setItem('isEng', this.isEng);
            this.addKeysOnKeyboard();
        }
        if (event.which === 20) {
            this.isCapsLock = !this.isCapsLock;
            this.addKeysOnKeyboard();
            if (this.isCapsLock)
                this.CAPSLOCK.classList.add('active-shift');
            else this.CAPSLOCK.classList.remove('active-shift');
        }
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            this.isShift = false;
            this.addKeysOnKeyboard();
        }
    }

    deleteSymbol(item_data) {
        let start = this.TEXTAREA.selectionStart,
            end = this.TEXTAREA.selectionEnd;
        if (!this.TEXTAREA.setRangeText) { return; }
        if (start >= end) {
            if (start <= 0 || !this.TEXTAREA.setSelectionRange) { return; }
            if (event.key == 'Backspace' || item_data == "Backspace")
                this.TEXTAREA.setSelectionRange(start - 1, start);
            else this.TEXTAREA.setSelectionRange(start, start + 1);
        }
        this.TEXTAREA.setRangeText("");
        this.TEXTAREA.focus();
    }

    setSelectionRange(text) {
        this.TEXTAREA.focus();
        this.TEXTAREA.setRangeText(text, this.TEXTAREA.selectionStart, this.TEXTAREA.selectionEnd, 'end');

    }

    keyDownHendler(event) {
        event.preventDefault();
        if (!document.querySelector('span.key[datacode="' + event.code + '"]'))
            return;
        else document.querySelector('span.key[datacode="' + event.code + '"]').classList.add('active');

        let text = '';
        let index = this.KEY_WHICH.indexOf(event.which);
        text = this.changeCaseLayout(text, index, this.isEng, this.isCapsLock, this.isShift);

        if (event.key !== "Control" && event.key !== 'Alt' && event.key !== 'Shift' && event.code !== 'MetaLeft' && event.code !== 'Tab' && event.key !== "CapsLock" && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Enter' && event.code !== 'Space' &&
            event.code !== 'ArrowLeft' &&
            event.code !== 'ArrowRight' &&
            event.code !== 'ArrowUp' &&
            event.code !== 'ArrowDown') {
            this.setSelectionRange(text);
        } else {
            if (event.key === 'Enter') this.setSelectionRange('\n');
            if (event.key === 'Backspace') this.deleteSymbol();
            if (event.code === 'Space') this.TEXTAREA.value += ' ';
            if (event.key === 'Delete') this.deleteSymbol();
            if (event.key === 'Tab') this.TEXTAREA.value += '    ';
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                this.isShift = true;
                this.addKeysOnKeyboard();
            }
            if (event.code == 'ArrowRight') this.moveRightCaret();
            if (event.code == 'ArrowLeft') this.moveLeftCaret();
            if (event.code == 'ArrowDown') this.moveDownCaret();
            if (event.code == 'ArrowUp') this.moveUpCaret();
        }
    }

    moveUpCaret() {
        let textarea = document.querySelector('textarea');
        let position = textarea.selectionEnd,
            upLine = textarea.value.lastIndexOf('\n', position),
            downLine = textarea.value.lastIndexOf('\n', upLine - 1);
        position = position - upLine;
        textarea.selectionStart = textarea.selectionEnd = downLine + position;
    }

    moveDownCaret() {
        let textarea = document.querySelector('textarea');
        let position = textarea.selectionEnd,
            upLine = textarea.value.lastIndexOf('\n', position),
            downLine = textarea.value.indexOf('\n', position + 1);
        position = position - upLine;
        textarea.selectionStart = textarea.selectionEnd = downLine + position;
    }

    moveLeftCaret() {
        let textarea = document.querySelector('textarea');
        textarea.selectionEnd -= 1;
        textarea.focus();
    }

    moveRightCaret() {
        let textarea = document.querySelector('textarea');
        textarea.selectionStart += 1;
        textarea.focus();
    }

    addListenersOnKeys() {
        document.addEventListener('keydown', (event) => this.keyDownHendler(event));
        document.addEventListener('keyup', (event) => this.keyUpHendler(event));
        document.addEventListener('mousedown', (e) => {
            if (e.target.tagName !== "SPAN" || !e.target.classList.contains('key')) {
                return;
            } else {
                this.TEXTAREA.focus();
                let item = e.toElement;
                item.classList.add('active');
                let item_data = item.getAttribute('datacode');
                if (item_data !== "ControlRight" && item_data !== "ControlLeft" && item_data !== 'AltRight' && item_data !== 'AltLeft' && item_data !== 'ShiftLeft' && item_data !== 'ShiftRight' && item_data !== 'MetaLeft' && item_data !== 'Tab' && item_data !== "CapsLock" && item_data !== 'Backspace' && item_data !== 'Delete' && item_data !== 'Enter' && item_data !== 'Space' && item_data !== 'ArrowRight' && item_data !== 'ArrowLeft' && item_data !== 'ArrowUp' && item_data !== 'ArrowDown')
                    this.setSelectionRange(item.innerText);
                else {
                    if (item_data === 'Enter') this.setSelectionRange('\n');
                    if (item_data === 'Backspace') this.deleteSymbol(item_data);
                    if (item_data === 'Space') this.setSelectionRange(' ');
                    if (item_data === 'Delete') this.deleteSymbol(item_data);
                    if (item_data === 'Tab') this.setSelectionRange('    ');
                    if (item_data == 'ShiftLeft' || item_data == 'ShiftRight') {
                        this.isShift = !this.isShift;
                        this.addKeysOnKeyboard();
                    }
                    if (item_data == 'CapsLock') {
                        this.isCapsLock = !this.isCapsLock;
                        this.addKeysOnKeyboard();
                    }
                    if (item_data == 'ArrowRight') this.moveRightCaret();
                    if (item_data == 'ArrowLeft') this.moveLeftCaret();
                    if (item_data == 'ArrowUp') this.moveUpCaret();
                    if (item_data == 'ArrowDown') this.moveDownCaret();
                }
            }
        })
        document.addEventListener('mouseup', () => {
            this.isShift = false;
            this.addKeysOnKeyboard();
            let CAPSLOCK = document.getElementById('67');
            if (this.isCapsLock) {
                CAPSLOCK.classList.add('active-shift');
            } else CAPSLOCK.classList.remove('active-shift');
        })
    }
}
window.onload = () => {
    const keyboard = new Keyboard();
    keyboard.addListenersOnKeys();
    keyboard.createDOM();
    keyboard.addKeysOnKeyboard();
};