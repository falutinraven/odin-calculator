import { string_to_operate } from "./calculator.js";

function create_digits(){
    let container = document.querySelector("#digits");
    for(var i = 0; i < 10; i++){
        let digit = document.createElement("button");
        digit.classList.add(`digit`);
        digit.textContent = i;
        container.appendChild(digit);
    }
}

function add_operater_listener(){
    for (const child of document.querySelectorAll("#operators > *")) 
        child.addEventListener("click", () => {
            if (document.querySelector("#display").classList.contains("hasOperator")){
                set_input(string_to_operate(display_content));
            }
            else
                document.querySelector("#display").classList.add("hasOperator");
        });
}

function add_equals_listener(){
    document.querySelector("#equal").addEventListener("click", () => {
        let display = document.querySelector("#display");
        if (display.classList.contains("hasOperator") && Number.isInteger(parseInt(display.value.slice(-1)))){
            set_input(string_to_operate(display_content));
            display.classList.remove("hasOperator")
        }
        else
            alert("cannot make calculations. make sure to have 2 operators and an operand");
    });
}

function add_listeners(){
    for (const child of document.querySelectorAll("#operators > *, #digits > *")) 
        child.addEventListener("click", () => add_to_input(child.textContent));
}

function add_to_input(text){
    let field = document.querySelector("#display");
    field.value = field.value.concat("", text);
    display_content = field.value;
}

function set_input(text){
    let field = document.querySelector("#display");
    field.value = text;
    display_content = field.value;
}

let clear_button = document.querySelector("#clear");
clear_button.addEventListener("click", () => {
    document.querySelector("#display").value = "" 
    document.querySelector("#display").classList.remove("hasOperator");
});

let operand1;
let operand2;
let operator;
let display_content;

create_digits();
add_equals_listener();
add_operater_listener();
add_listeners();