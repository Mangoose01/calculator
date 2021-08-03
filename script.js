let screenPrint = 0;
let historyPrint = "";
let historyPrint2 = "";
let historyPrint3 = "";
let firstVar
let operant
let sumVal


const resultScreen = document.querySelector(".resultscreen");
const historyScreen = document.querySelector(".historyscreen");
const historyScreen2 = document.querySelector(".historyscreen2")
const historyScreen3 = document.querySelector(".historyscreen3")
const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const percentage = document.querySelector(".percentage");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const substract = document.querySelector(".substract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const period = document.querySelector(".period");

const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const zero = document.querySelector(".zero");

resultScreen.textContent = screenPrint

nine.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "9";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "9";
    historyScreen.textContent = historyPrint;
});

eight.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "8";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "8";
    historyScreen.textContent = historyPrint;
});

seven.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "7";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "7";
    historyScreen.textContent = historyPrint;
});

six.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "6";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "6";
    historyScreen.textContent = historyPrint;
});

five.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "5";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "5";
    historyScreen.textContent = historyPrint;
});

four.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "4";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "4";
    historyScreen.textContent = historyPrint;
});

three.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "3";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "3";
    historyScreen.textContent = historyPrint;
});

two.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "2";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "2";
    historyScreen.textContent = historyPrint;
});

one.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "1";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "1";
    historyScreen.textContent = historyPrint;
});

zero.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal > '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "0";
    rmZero();
    resultScreen.textContent = screenPrint;
    historyPrint += "0";
    historyScreen.textContent = historyPrint;
});

clear.addEventListener('click', () => {
    screenPrint = 0;
    operant = undefined;
    resultScreen.textContent = screenPrint;
    historyPrint = "";
    historyScreen.textContent = historyPrint;
    historyPrint2 = "";
    historyScreen2.textContent = historyPrint;
    historyPrint3 = "";
    historyScreen3.textContent = historyPrint;
});

plusMinus.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) * -1;
    resultScreen.textContent = screenPrint;
});

period.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) + ".";
    resultScreen.textContent = screenPrint;
    historyPrint += ".";
    historyScreen.textContent = historyPrint;
});

percentage.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) / 100;
    resultScreen.textContent = screenPrint;
}); 

divide.addEventListener('click', () => {
    if (operant == "div") {
        screenPrint = firstVar / parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "mult") {
        screenPrint = firstVar * parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "sub") {
        screenPrint = firstVar - parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "add") {
        screenPrint = firstVar + parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    }
    operant = "div";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
    historyPrint += " / ";
    historyScreen.textContent = historyPrint;
});

multiply.addEventListener('click', () => {
    if (operant == "div") {
        screenPrint = firstVar / parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "mult") {
        screenPrint = firstVar * parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "sub") {
        screenPrint = firstVar - parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "add") {
        screenPrint = firstVar + parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    }
    operant = "mult";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
    historyPrint += " x ";
    historyScreen.textContent = historyPrint;
});

substract.addEventListener('click', () => {
    if (operant == "div") {
        screenPrint = firstVar / parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "mult") {
        screenPrint = firstVar * parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "sub") {
        screenPrint = firstVar - parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "add") {
        screenPrint = firstVar + parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    }
    operant = "sub";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
    historyPrint += " - ";
    historyScreen.textContent = historyPrint;
});

add.addEventListener('click', () => {
    if (operant == "div") {
        screenPrint = firstVar / parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "mult") {
        screenPrint = firstVar * parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "sub") {
        screenPrint = firstVar - parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    } else if (operant == "add") {
        screenPrint = firstVar + parseFloat(screenPrint);
        resultScreen.textContent = parseFloat(screenPrint.toFixed(4));
    }
    operant = "add";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
    historyPrint += " + ";
    historyScreen.textContent = historyPrint;
});

equal.addEventListener('click', () => {
    if (operant == "div") {
        screenPrint = firstVar / parseFloat(screenPrint);
        screenPrint = parseFloat(screenPrint.toFixed(4));
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    } else if (operant == "mult") {
        screenPrint = firstVar * parseFloat(screenPrint);
        screenPrint = parseFloat(screenPrint.toFixed(4));
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    } else if (operant == "sub") {
        screenPrint = firstVar - parseFloat(screenPrint);
        screenPrint = parseFloat(screenPrint.toFixed(4));
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    } else if (operant == "add") {
        screenPrint = firstVar + parseFloat(screenPrint);
        screenPrint = parseFloat(screenPrint.toFixed(4));
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    }
    operant = undefined;
    sumVal = parseFloat(screenPrint);
});

function rmZero() {
    if(screenPrint.indexOf(0)== '0') {
        screenPrint = screenPrint.substring(1);
    }
 }

 function historySwitch() {
    historyScreen.textContent = historyPrint;
    historyPrint3 = historyPrint2;
    historyScreen3.textContent = historyPrint3;
    historyPrint2 = historyPrint;
    historyScreen2.textContent = historyPrint2;
    historyScreen.textContent = "";
    historyPrint = "SUM";
 }
   