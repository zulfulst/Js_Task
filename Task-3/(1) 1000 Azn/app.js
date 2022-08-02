let num = prompt(" Choose one number between 0 and 50 ")
let eded = Math.floor(num) // Tam edede cevirmek ucun
if (eded > 50 || eded < 0) {
    console.log("Wrong choice")
} else if (eded == 49) {
    console.log('You win 1K Azn')
} else {
    console.log('Check your luck again')
}