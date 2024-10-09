// countdown from user input to 0

let count = parseFloat(prompt('Enter a number'))
let i

for (i = count; i >= 0; i--) {
    document.write(`${i} </br>`)
}