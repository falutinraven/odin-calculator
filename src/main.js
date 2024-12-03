const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(operand1, operator, operand2){
    switch (operator){
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);
        default:
            console.log(`unable to perform operation ${operand1} ${operator} ${operand2}`)
    }
}

function create_digits(){
    container = document.querySelector("#digits");
    for(var i = 1; i < 10; i++){
        let digit = document.createElement("button");
        digit.classList.add(`digit`);
        digit.textContent = i;
        container.appendChild(digit);
    }
}

function add_listeners(){
    for (const child of document.querySelectorAll("#operators > *, #digits > *")) 
        child.addEventListener("click", () => add_to_input(child.textContent));
}

function add_to_input(text){
    field = document.querySelector("#display");
    field.value = field.value.concat("", text);
    display_content = field.value;
}

let clear_button = document.querySelector("#clear");
clear_button.addEventListener("click", () => document.querySelector("#display").value = "");

let operand1;
let operand2;
let operator;
let display_content;

create_digits();
add_listeners();