//random number will be between 0 - 1; 0 will be heads, 1 will be tails
//

let coinFlip
let randomNum = 0

do {
    randomNum = Math.floor(Math.random()*2);
    alert(randomNum)

    if (randomNum === 0) {
        document.write('Heads ')
        // console.log('Heads ')
    } else {
        document.write('Tails ')
        // console.log('Tails ')
    }

} while (randomNum === 0)