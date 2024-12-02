function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

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

// function add_listeners(){
//     document.querySelectorAll("#operators, #digits").forEach(element => {
//         for(var i = 0; i < element.children.length; i++){
//             let child = element.children[i]
//             child.addEventListener("click", function(){
//                 add_to_input(child.textContent);
//             })
//         }
//     });


function add_listeners(){
    const elements = document.querySelectorAll("#operators > *, #digits > *");
    for (const child of elements) {
        child.addEventListener("click", () => addToInput(child.textContent));
    }
}

function add_to_input(text){
    field = document.querySelector("#display");
    field.value = field.value.concat("", text);
}

create_digits()
add_listeners();
let operand1;
let operand2;
let operator;
