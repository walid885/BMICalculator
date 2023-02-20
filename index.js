const btnEl= document.getElementById("btn"); 
const bmiInpEl = document.getElementById("bmiRes")
const weigCondEL =document.getElementById("weightCondition")
function calculateBMI(){
    const heiVal = document.getElementById("height").value/100
    const weiVal = document.getElementById("weight").value
    const bmiVal = weiVal/(heiVal*heiVal)
    bmiInpEl.value= bmiVal.toFixed(2)
    if (bmiVal < 18.5) {
        weigCondEL.innerText ="under Weight"
    }else if ( bmi >= 18.5 && bmiVal <= 24.9){
        weigCondEL.innerText ="Normal  Weight"
    }else if ( bmi >= 25 && bmiVal <= 29.9){
        weigCondEL.innerText ="Over  Weight"
    }else {
        weigCondEL.innerText ="Obese"

    }
}

btnEl.addEventListener("click",calculateBMI)