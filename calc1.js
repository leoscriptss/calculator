const display = document.getElementById('display');

function appendToDisplay(input){
   display.value += input;  //This line alone!!!//
}

function  clearDisplay(){
   display.value = ''; //This line just wipes it off //
}

function calculate(){
     try{
        display.value = eval(display.value);
     }
     catch(error){
        display.value = "Error"
     }
};
