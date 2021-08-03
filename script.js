let screenPrint = 0;
let firstVar
let operant


const resultScreen = document.querySelector(".resultscreen")
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
    screenPrint = screenPrint + "9";
    rmZero();
    resultScreen.textContent = screenPrint;
});

eight.addEventListener('click', () => {
    screenPrint = screenPrint + "8";
    rmZero();
    resultScreen.textContent = screenPrint;
});

seven.addEventListener('click', () => {
    screenPrint = screenPrint + "7";
    rmZero();
    resultScreen.textContent = screenPrint;
});

six.addEventListener('click', () => {
    screenPrint = screenPrint + "6";
    rmZero();
    resultScreen.textContent = screenPrint;
});

five.addEventListener('click', () => {
    screenPrint = screenPrint + "5";
    rmZero();
    resultScreen.textContent = screenPrint;
});

four.addEventListener('click', () => {
    screenPrint = screenPrint + "4";
    rmZero();
    resultScreen.textContent = screenPrint;
});

three.addEventListener('click', () => {
    screenPrint = screenPrint + "3";
    rmZero();
    resultScreen.textContent = screenPrint;
});

two.addEventListener('click', () => {
    screenPrint = screenPrint + "2";
    rmZero();
    resultScreen.textContent = screenPrint;
});

one.addEventListener('click', () => {
    screenPrint = screenPrint + "1";
    rmZero();
    resultScreen.textContent = screenPrint; 
});

zero.addEventListener('click', () => {
    screenPrint = screenPrint + "0";
    rmZero();
    resultScreen.textContent = screenPrint;
});

clear.addEventListener('click', () => {
    screenPrint = 0;
    operant = undefined;
    resultScreen.textContent = screenPrint;
});

plusMinus.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) * -1;
    resultScreen.textContent = screenPrint;
});

period.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) + ".";
    resultScreen.textContent = screenPrint;
});

percentage.addEventListener('click', () => {
    screenPrint = parseFloat(screenPrint) / 100;
    resultScreen.textContent = screenPrint;
}); 

divide.addEventListener('click', () => {
    if (operant == "div") {
        resultScreen.textContent = firstVar / parseFloat(screenPrint);
        screenPrint = firstVar / parseFloat(screenPrint);
    } else if (operant == "mult") {
        resultScreen.textContent = firstVar * parseFloat(screenPrint);
        screenPrint = firstVar * parseFloat(screenPrint);
    } else if (operant == "sub") {
        resultScreen.textContent = firstVar - parseFloat(screenPrint);
        screenPrint = firstVar - parseGloat(screenPrint);
    } else if (operant == "add") {
        resultScreen.textContent = firstVar + parseFloat(screenPrint);
        screenPrint = firstVar + parseFloat(screenPrint);
    }
    operant = "div";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
});

multiply.addEventListener('click', () => {
    if (operant == "div") {
        resultScreen.textContent = firstVar / parseFloat(screenPrint);
        screenPrint = firstVar / parseFloat(screenPrint);
    } else if (operant == "mult") {
        resultScreen.textContent = firstVar * parseFloat(screenPrint);
        screenPrint = firstVar * parseFloat(screenPrint);
    } else if (operant == "sub") {
        resultScreen.textContent = firstVar - parseFloat(screenPrint);
        screenPrint = firstVar - parseGloat(screenPrint);
    } else if (operant == "add") {
        resultScreen.textContent = firstVar + parseFloat(screenPrint);
        screenPrint = firstVar + parseFloat(screenPrint);
    }
    operant = "mult";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
});

substract.addEventListener('click', () => {
    if (operant == "div") {
        resultScreen.textContent = firstVar / parseFloat(screenPrint);
        screenPrint = firstVar / parseFloat(screenPrint);
    } else if (operant == "mult") {
        resultScreen.textContent = firstVar * parseFloat(screenPrint);
        screenPrint = firstVar * parseFloat(screenPrint);
    } else if (operant == "sub") {
        resultScreen.textContent = firstVar - parseFloat(screenPrint);
        screenPrint = firstVar - parseGloat(screenPrint);
    } else if (operant == "add") {
        resultScreen.textContent = firstVar + parseFloat(screenPrint);
        screenPrint = firstVar + parseFloat(screenPrint);
    }
    operant = "sub";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
});

add.addEventListener('click', () => {
    if (operant == "div") {
        resultScreen.textContent = firstVar / parseFloat(screenPrint);
        screenPrint = firstVar / parseFloat(screenPrint);
    } else if (operant == "mult") {
        resultScreen.textContent = firstVar * parseFloat(screenPrint);
        screenPrint = firstVar * parseFloat(screenPrint);
    } else if (operant == "sub") {
        resultScreen.textContent = firstVar - parseFloat(screenPrint);
        screenPrint = firstVar - parseGloat(screenPrint);
    } else if (operant == "add") {
        resultScreen.textContent = firstVar + parseFloat(screenPrint);
        screenPrint = firstVar + parseFloat(screenPrint);
    }
    operant = "add";
    firstVar = parseFloat(screenPrint);
    screenPrint = 0;
});

equal.addEventListener('click', () => {
    if (operant == "div") {
        resultScreen.textContent = firstVar / parseFloat(screenPrint);
        screenPrint = firstVar / parseFloat(screenPrint);
    } else if (operant == "mult") {
        resultScreen.textContent = firstVar * parseFloat(screenPrint);
        screenPrint = firstVar * parseFloat(screenPrint);
    } else if (operant == "sub") {
        resultScreen.textContent = firstVar - parseFloat(screenPrint);
        screenPrint = firstVar - parseGloat(screenPrint);
    } else if (operant == "add") {
        resultScreen.textContent = firstVar + parseFloat(screenPrint);
        screenPrint = firstVar + parseFloat(screenPrint);
    }
    operant = undefined;
    
});

function rmZero() {
    if(screenPrint.indexOf(0)== '0') {
        screenPrint = screenPrint.substring(1);
        console.log(screenPrint);
    }
 }
   