
//calculator program
//task; Show if number is {Positive.Even, Postive.Odd, Negative.Even , Negative.Odd} as an alert  

const display = document.getElementById("display");
let value = display.value; 

function calculatorDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}


function calculate(){
    display.value = eval(display.value); 

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
    
}

