const buttons = document.getElementsByClassName('btn');
const display = document.getElementsByClassName('display-input')[0];
const operators = ['+', '-', '*', '/'];
const equal = document.getElementsByClassName('btn-equal')[0];
const del = document.getElementsByClassName('btn-delete')[0];
const clear = document.getElementsByClassName('btn-clear')[0];
const percent = document.getElementsByClassName('btn-percent')[0];

equal.addEventListener('click', () => {
    if (operators.includes(display.value[display.value.length - 1])) { // if last character is an operator
        display.value = display.value.slice(0, -1); // remove last character
    }
    display.value = eval(display.value); // evaluate the expression
});

del.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

clear.addEventListener('click', () => {
    display.value = '0';
});

percent.addEventListener('click', () => {
    display.value = eval(display.value) / 100;
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        console.log('You clicked button ', Number(buttons[i].innerText));
        if (display.value === '0') {
            display.value = '';
        }
        display.value += buttons[i].innerText;
    });
}