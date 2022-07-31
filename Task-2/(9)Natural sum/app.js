let eded = prompt('Toplama ucun eded daxil edin')
let sum

if (eded < 0) {
    alert('Menfi ededler natural eded deyil')
} else if (eded == 0) {
    alert('0 natural eded deyil')
} else if (eded > 0) {
    sum = 0;
    for (let i = 1; i <= eded; i++)
        sum += i
}
alert(sum)