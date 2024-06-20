//var to target body element

const bodyCSS = document.querySelector("body");
const buttonChange = document.querySelector("button");
buttonChange.addEventListener("click", function () {changeColor(); });
let randomRgbValue = "";

//event listner on button

function changeColor() {
    
    console.log("COLOR CHANGE");
    bodyCSS.style.backgroundColor = rgbValue();
}

function rgbValue () {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    
    num1 = Math.floor(Math.random()*255);
    num2 = Math.floor(Math.random()*255);
    num3 = Math.floor(Math.random()*255);

    console.log (num1);

    return ("rgb(" + num1.toString() + "," + num2.toString() + "," + num3.toString() + ")");
    
}

