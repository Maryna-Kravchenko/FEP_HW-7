const calcSum = (firstNumber, secondNumber) => firstNumber + secondNumber;
const calcSub = (firstNumber, secondNumber) => firstNumber - secondNumber;
const calcMultiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;
const calcDivision = (firstNumber, secondNumber) => firstNumber / secondNumber;

function getCalc() {
    const firstNumber = +prompt('Enter your number');
    const secondNumber = +prompt('Enter one more number');
    const userOperator = prompt ('Enter one of these operators: +, -, * or /');

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        if (userOperator === '+') {
            return alert(calcSum(firstNumber, secondNumber));
        } else if (userOperator === '-') {
            return alert(calcSub(firstNumber, secondNumber));
        } else if (userOperator === '*') {
            return alert(calcMultiplication(firstNumber, secondNumber));
        } else if (userOperator === '/') {
            return alert(calcDivision(firstNumber, secondNumber));
        } else {
            return alert('Incorrect operator value')
        }
    } else {
        return alert('Incorrect number value')
    }
}

getCalc();