// loop from 1 - 100. 
// - if multiple of 3 = "Marco!"
// - if multiple of 5 = "Polo!"
// - if multiple of 3 and 5 = "Marco! Polo!"

let count = 100
let i

for (i = 0; i <= count; i++) {

    if (i % 3 === 0) {
        document.write('"Marco!" </br>')
    }

    if (i % 5 === 0) {
        document.write('"Polo!"</br>')
    }

    // document.write(`${i} </br>`)

    if (i % 3 === 0 && i % 5 === 0) {
        document.write('"Marco! Polo!"</br>')
    }

}