
//calculator program
//task; Show if number is {Positive.Even, Postive.Odd, Negative.Even , Negative.Odd} as an alert  
const operators = ['+', '-', '*', '/'];


function calculatorDisplay(input){
    const display = document.getElementById("display");
    const lastInput = display.value.slice(-1);
    
    if (operators.includes(input) && operators.includes(lastInput)) {return;
    }else {
        display.value += input
    }
}

function clearDisplay(){
    display.value = "";
}


function calculate(){
    try{
    display.value = eval(display.value); 
    setTimeout(() => {


    },50);
        } catch (error) {
            alert("Error: Invalid Expression")
        }
}

//new code
function backspace(){
    display.value = display.value.slice(0,-1);
}

// function alertButton(){
//     if (eval(display.value) === 0){
//         alert("The number is Zero")
//         }if (display.value > 0){
//             if (display.value % 2 === 0){
//                 alert("The number is positive & even")
//             }else{
//                 alert("The number is positive & odd")
//             }
//         }else {
//             if (display.value % 2 === 0){
//                 alert("The number is negative & even")
//             } else {
//                 alert("The number is negative & odd")}
//         }
// }