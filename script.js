let screenPrint = 0;
let historyPrint = "";
let historyPrint2 = "";
let historyPrint3 = "";
let firstVar;
let operant;
let sumVal;
let strLength;
let strLength2;


const resultScreen = document.querySelector(".resultscreen");
const historyScreen = document.querySelector(".historyscreen");
const historyScreen2 = document.querySelector(".historyscreen2");
const historyScreen3 = document.querySelector(".historyscreen3");
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

//NUMBERS EVENT LISTENERS

nine.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "9";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
        historyPrint = "9";
    } else {
        historyPrint += "9";
    }
    historyScreen.textContent = historyPrint;
    nine.blur();
});

eight.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "8";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
        historyPrint = "8";
    } else {
        historyPrint += "8";
    }
    historyScreen.textContent = historyPrint;
    eight.blur();
});

seven.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "7";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
        historyPrint = "7";
    } else {
        historyPrint += "7";
    }
    historyScreen.textContent = historyPrint;
    seven.blur();
});

six.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "6";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
        historyPrint = "6";
    } else {
        historyPrint += "6";
    }
    historyScreen.textContent = historyPrint;
    six.blur();
});

five.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "5";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
        historyPrint = "5";
    } else {
        historyPrint += "5";
    }
    historyScreen.textContent = historyPrint;
    five.blur();
});

four.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "4";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
        historyPrint = "4";
    } else {
        historyPrint += "4";
    }
    historyScreen.textContent = historyPrint;
    four.blur();
});

three.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "3";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
        historyPrint = "3";
    } else {
        historyPrint += "3";
    }
    historyScreen.textContent = historyPrint;
    three.blur();
});

two.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "2";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
            historyPrint = "2";
        } else {
            historyPrint += "2";
        }
    historyScreen.textContent = historyPrint;
    two.blur();
});

one.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "1";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
            historyPrint = "1";
        } else {
            historyPrint += "1";
        }
    historyScreen.textContent = historyPrint;
    one.blur();
});

zero.addEventListener('click', () => {
    if (typeof operant == 'undefined' && sumVal != '0') {
        screenPrint = 0;
        sumVal = 0;
        historyPrint = "";
    } 
    screenPrint = screenPrint + "0";
    rmZero();
    resultScreen.textContent = screenPrint;
    if (historyPrint == "ANSWER") {
            historyPrint = "0";
        } else {
            historyPrint += "0";
        }
    historyScreen.textContent = historyPrint;
    zero.blur();
});

//KEYBOARD BINDING NUMBERS LISTENERS

document.addEventListener('keydown', (event) => {
    if (event.key === '9') {
        nine.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '8') {
        eight.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '7') {
        seven.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '6') {
        six.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '5') {
        five.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '4') {
        four.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '3') {
        three.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '2') {
        two.click();
        blurAll();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        one.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '0') {
        zero.click();
    }
});
     
   

//OTHER FEATURES EVENT LISTENERS

clear.addEventListener('click', () => {
    screenPrint = 0;
    sumVal = 0;
    operant = undefined;
    resultScreen.textContent = screenPrint;
    historyPrint = "";
    historyScreen.textContent = historyPrint;
    historyPrint2 = "";
    historyScreen2.textContent = historyPrint;
    historyPrint3 = "";
    historyScreen3.textContent = historyPrint;
    clear.blur();
});

plusMinus.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) * -1;
    resultScreen.textContent = screenPrint;
    historyPrint += "(??)";
    historyScreen.textContent = historyPrint;
    plusMinus.blur();
});

//This is all fucked up - I need to figure it out. Function rmZero may be conflicting...
period.addEventListener('click', () => {
    strLength2 = screenPrint.length;
    if (!screenPrint.includes(".") ) {
        if (screenPrint.charAt(0) == 0) {
            screenPrint = parseFloat(screenPrint) + "."
            historyPrint += ".";
        } else {
            screenPrint = parseFloat(screenPrint) + ".";
            historyPrint += ".";
        }
        resultScreen.textContent = screenPrint;
        historyScreen.textContent = historyPrint;
    }
    period.blur();
});

percentage.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) / 100;
    screenPrint = screenPrint.toFixed(4);
    resultScreen.textContent = screenPrint;
    historyPrint += "(%)"
    historyScreen.textContent = historyPrint;
    percentage.blur();
}); 

//KEYBOARD OTHER FEATURES EVENT LISTENERS

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.key === 'Backspace') {
            clear.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '.') {
            period.click();
    }
 });

 document.addEventListener('keydown', (event) => {
    if (event.key === '%') {
            percentage.click();
    }
 });


//OPERANT EVENT LISTENERS

divide.addEventListener('click', () => {
    strLength = historyPrint.length;
    if(historyPrint.charAt(strLength-2) == "/" || historyPrint.charAt(strLength-2) == "x" ||historyPrint.charAt(strLength-2) == "+" || historyPrint.charAt(strLength-2) == "-" ) {
        alert("You can't use 2 operators in a row! Are you attempting to crash my calculator? It won't work!")
    } else {
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
    }
    divide.blur();
});

multiply.addEventListener('click', () => {
    strLength = historyPrint.length;
    if(historyPrint.charAt(strLength-2) == "/" || historyPrint.charAt(strLength-2) == "x" ||historyPrint.charAt(strLength-2) == "+" || historyPrint.charAt(strLength-2) == "-" ) {
        alert("You can't use 2 operators in a row! Are you attempting to crash my calculator? It won't work!")
    } else {
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
    }
    multiply.blur();
});

substract.addEventListener('click', () => {
    strLength = historyPrint.length;
    if(historyPrint.charAt(strLength-2) == "/" || historyPrint.charAt(strLength-2) == "x" ||historyPrint.charAt(strLength-2) == "+" || historyPrint.charAt(strLength-2) == "-" ) {
        alert("You can't use 2 operators in a row! Are you attempting to crash my calculator? It won't work!")
    } else {
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
    }
    substract.blur();
});

add.addEventListener('click', () => {
    strLength = historyPrint.length;
    if(historyPrint.charAt(strLength-2) == "/" || historyPrint.charAt(strLength-2) == "x" ||historyPrint.charAt(strLength-2) == "+" || historyPrint.charAt(strLength-2) == "-" ) {
        alert("You can't use 2 operators in a row! Are you attempting to crash my calculator? It won't work!")
    } else {
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
    }
    add.blur();
});

//KEYBOARD OPERANT EVENT LISTENERS

document.addEventListener('keydown', (event) => {
    if (event.key === '/') {
        divide.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '*') {
        multiply.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '-') {
        substract.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '+') {
        add.click();
    }
});

//EQUAL EVENT LISTENER

equal.addEventListener('click', () => {
    if (operant == "div") {
        screenPrint = firstVar / parseFloat(screenPrint);
        screenPrint = screenPrint.toFixed(4);
        screenPrint = parseFloat(screenPrint);
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    } else if (operant == "mult") {
        screenPrint = firstVar * parseFloat(screenPrint);
        screenPrint = screenPrint.toFixed(4);
        screenPrint = parseFloat(screenPrint);
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    } else if (operant == "sub") {
        screenPrint = firstVar - parseFloat(screenPrint);
        screenPrint = screenPrint.toFixed(4);
        screenPrint = parseFloat(screenPrint);
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    } else if (operant == "add") {
        screenPrint = firstVar + parseFloat(screenPrint);
        screenPrint = screenPrint.toFixed(4);
        screenPrint = parseFloat(screenPrint);
        resultScreen.textContent = screenPrint;
        historyPrint += " = " + screenPrint.toString();
        historySwitch();
    }
    operant = undefined;
    sumVal = parseFloat(screenPrint);
    equal.blur();
});

//KEYBOARD EQUAL EVENT LISTENER

document.addEventListener('keydown', (event) => {
    if (event.key === '=' || event.key === "Enter") {
        equal.click();
    }
});

//FUNCTIONS

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
    historyPrint = "ANSWER";
 }

/*function blurAll() {
    nine.blur();
    eight.blur();
    seven.blur();
    six.blur();
    five.blur();
    four.blur();
    three.blur();
    two.blur();
    one.blur();
    zero.blur();
    plusMinus.blur();
    percentage.blur();
    divide.blur();
    multiply.blur();
    substract.blur();
    add.blur();
    equal.blur();
    period.blur();
    clear.blur();
 }*/