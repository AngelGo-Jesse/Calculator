
//calculator program
//task; Show if number is {Positive.Even, Postive.Odd, Negative.Even , Negative.Odd} as an alert  

const display = document.getElementById("display");
let value = display.value; 

// let lastInput = display.value.slice(-1);
// const operators = ['+', '-', '*', '/'];



function calculatorDisplay(input){
    display.value += input
    // if (operators.includes(value) && operators.includes(lastInput)) {return;} else{display.value += input}
}

function clearDisplay(){
    display.value = "";
}


function calculate(){
    try{
    display.value = eval(display.value); 
    setTimeout(() => {

        if (eval(display.value) === 0){
            alert("The number is Zero")
            }if (display.value > 0){
                if (display.value % 2 === 0){
                    alert("The number is positive & even")
                }else{
                    alert("The number is positive & odd")
                }
            }else {
                if (display.value % 2 === 0){
                    alert("The number is negative & even")
                } else {
                    alert("The number is negative & odd")}
            }
    },50);
        } catch (error) {
            alert("Error: Invalid Expression")
        }
}

