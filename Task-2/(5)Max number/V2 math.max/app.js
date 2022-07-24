let a = prompt("Number one")
let b = prompt("Number two")
let c = prompt("Number three")

if (a > b && a > c) {
    alert(a)
} else if (b > c && b > a) {
    alert(b)
} else if (c > a && c > b) {
    alert(c)
} else {
    alert('Equality')
}