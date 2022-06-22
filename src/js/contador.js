
var numberElement = document.getElementById("currentNumber")

var incrementButtonElement = document.getElementsByName("adicionar")[0]
incrementButtonElement.addEventListener("click", increment)

var decrementButtonElement = document.getElementsByName("subtrair")[0]
decrementButtonElement.addEventListener("click", decrement)
decrementButtonElement.disabled = true

var num = 0


console.log(incrementButtonElement)
console.log(decrementButtonElement)




function increment(){
    num = num + 1
    numberElement.innerHTML = num
    validateValue(num)
}

function decrement(){
    num = num - 1
    numberElement.innerHTML = num
    validateValue(num)
}

function validateValue(value){
    if (value >= 10){
        incrementButtonElement.disabled = true;
        decrementButtonElement.disabled = false;
        console.log(value)
    }else if(value <= 0){
        incrementButtonElement.disabled = false;
        decrementButtonElement.disabled = true;
    }else{
        incrementButtonElement.disabled = false;
        decrementButtonElement.disabled = false;
    }
}