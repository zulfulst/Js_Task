const number = parseInt(prompt('Enter a positive integer: '));

if (number < 0) {
    console.log("Error!")
}else if (number === 0) {
    console.log('1')
}else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i
    }
    console.log(fact)
}

