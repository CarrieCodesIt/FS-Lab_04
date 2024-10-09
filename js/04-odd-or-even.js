// loop from 0 - 15, displaying if number is odd or even

let count = 15
let i

for (i = 0; i < count; i++) {
    if ( i % 2 === 0 ) {
        // document.write(`"${i} is even"</br>`)
        console.log (`"${i} is even"</br>`)
    }
    else {
        // document.write (`"${i} is odd"</br>`)
        console.log (`"${i} is odd"</br>`)
    }
}