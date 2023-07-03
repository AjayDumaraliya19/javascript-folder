/** ===== Script for the calculator ===== */
const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');
const marqueeElement = document.getElementById('marquee');

let input = "";

for (let key of keys) {
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value == "clear") {
            input = "";
            display_input.innerHTML = "0";
            display_output.innerHTML = "";
        } else if (value == "backspace") {
            input = input.slice(0, -1);
            display_input.innerHTML = cleanInput(input);
        } else if (value == "=") {
            display_output.innerHTML = cleanOutput(eval(PerpareInput(input)));
        } else if (value == "brackets") {
            input += (input.indexOf("(") == -1 || (input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") < input.lastIndexOf(")"))) ? "(" : ")";
            display_input.innerHTML = cleanInput(input);
        } else {
            if (validateInput(value)) {
                input += value;
                display_input.innerHTML = cleanInput(input);
            }
        }
    });
}

// Remove marquee tag when click on any button
keys.forEach(key => {
    key.addEventListener("click", removeMarquee);
});

// Input values operators
function cleanInput(input) {
    return input
        .replace(/\//g, ' <span class="operator">÷</span> ')
        .replace(/\*/g, ' <span class="operator">x</span> ')
        .replace(/\+/g, ' <span class="operator">+</span> ')
        .replace(/-/g, ' <span class="operator">-</span> ')
        .replace(/\(/g, '<span class="brackets">(</span>')
        .replace(/\)/g, '<span class="brackets">)</span>')
        .replace(/%/g, ' <span class="percent">%</span> ');
}

// Output value base on the input value 
function cleanOutput(output) {
    let [integer, decimal] = output.toString().split(".");
    let output_array = integer.split("");

    if (output_array.length > 3) {
        for (let i = output_array.length - 3; i > 0; i -= 3) {
            output_array.splice(i, 0, ",");
        }
    }

    // Set the decimal value 
    if (decimal) {
        output_array.push(".", decimal);
    }

    return output_array.join("");
}

// Operator use in one time 
function validateInput(value) {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if (value == "." && last_input == ".") {
        return false;
    }

    if (operators.includes(value)) {
        return !operators.includes(last_input);
    }

    return true;
}

// Percentage input set value
function PerpareInput(input) {
    return input.replace(/%/g, "/100");
}

// Remove marquee element
function removeMarquee() {
    marqueeElement.remove();
}