
const number1 = parseInt(prompt('Number 1'))
const calculator = prompt('Choose one ( + , - , * , / )')
const number2 = parseInt(prompt('Number 2'))


if (calculator == '+') {
    result = number1 + number2
} else if (calculator == '-') {
    result = number1 - number2
} else if (calculator == '*') {
    result = number1 * number2
} else {
    result = number1 / number2
}

const netice = document.getElementById('netice')
netice.textContent = result
