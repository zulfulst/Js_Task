const calculator = prompt('Choose one ( + , - , * , / )')

const number1 = parseInt(prompt('Number 1'))
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

console.log(result)