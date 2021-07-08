const userInput = document.getElementById('input-number');

// opration Button
const addBtn = document.getElementById('btn-add');
const subtracBtn = document.getElementById('btn-subtrac');
const multyBtn = document.getElementById('btn-multy');
const dividBtn = document.getElementById('btn-divid');

const defaultResult = 0;
let currentResult = defaultResult;

const resultOutput = document.getElementById('current-result');
const currentCalc = document.getElementById('current-calc');

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
}

function outputResult(result, text){
    resultOutput.textContent = result;
    currentCalc.textContent = text;
}

// Button opration methods
function add() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;

    currentResult += enteredNumber;
    createAndWriteOutput('+', initResult, enteredNumber);
}

function subtrac() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;

    currentResult -= enteredNumber;
    createAndWriteOutput('-', initResult, enteredNumber);
}

function multy() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;

    currentResult *= enteredNumber;
    createAndWriteOutput('*', initResult, enteredNumber);
}

function divid() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;

    currentResult /= enteredNumber;
    createAndWriteOutput('/', initResult, enteredNumber);
}

// Event listener
addBtn.addEventListener('click', add);
subtracBtn.addEventListener('click', subtrac);
multyBtn.addEventListener('click', multy);
dividBtn.addEventListener('click', divid);

