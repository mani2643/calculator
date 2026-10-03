const display = document.querySelector("#display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    // let len = display.value.length;
    // let updatedOne = display.value.slice(0,len-1);
    // display.value = updatedOne;
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Syntax Error";
    }
    
}
