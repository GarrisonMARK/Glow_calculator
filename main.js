const display = document.getElementById("display");


appendToDisplay = function appendToDisplay(input){
     display.value += input;
 };

 clearDisplay = function clearDisplay(){
    display.value = "";
};

 calculate = function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error"
    }
}