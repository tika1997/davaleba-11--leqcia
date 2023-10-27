const bulb = document.getElementById("bulb");

function turnOnBulb(){
    bulb.src = "images/pic_bulbon.gif"
}

const bulboff = document.getElementById("bulboff");

function turnOffBulb(){
    bulb.src = "images/pic_bulboff.gif"
}


const sumWithParameter = document.getElementById("sum-with-parameter");
function sumNumbersWithParameters(num1, num2){
    let sum = num1 + num2;
    sumWithParameter.innerHTML = sum;
}
sumNumbersWithParameters(40,36);

// ბოლო დავალებაში ვერ მივხდი ესე უნდა გამეკეთებინა თუ არა და დანარჩენებზე აღარ გავაკეთე