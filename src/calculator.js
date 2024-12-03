const operators = ['+', '-', '*', '/']

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

export function string_to_operate(str){
    let operator;
    operators.forEach(element => {
        if(str.includes(element)){
            operator = element;
        }
    });

    if(!operator){
        console.log("invalid operation string");
        return null;
    }

    let operator_index = str.indexOf(operator);
    if(operator === '/' && str.substring(operator_index + 1).trim() === "0"){
        alert("nice try");
        return 0;
    }

    let operand1 = Number(str.substring(0, operator_index).trim());
    let operand2 = Number(str.substring(operator_index + 1).trim());
    return Math.round(operate(operand1, operator, operand2) * 10) / 10;
}