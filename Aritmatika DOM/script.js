const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("number-result");
const ops = document.getElementsByClassName("ops");

for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", e => {
        result.value = validatorOperator(e.target.innerText, parseInt(number1.value), parseInt(number2.value));
    });
}

function validatorOperator(val, number1, number2){
    if (val == "+") {
        return number1 + number2;
    } else if (val == "-") {
        return number1 - number2;
    } else if (val == "X") {
        return number1 * number2;
    } else if (val == ":") {
        return number1 / number2;
    } else if (val == "%") {
        return number1 % number2;
    } else if (val == "^") {
        return Math.pow(number1, number2);
    }
}