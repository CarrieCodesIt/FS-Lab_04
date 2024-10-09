//random number will be between 0 - 1; 0 will be heads, 1 will be tails
//prompt user for loop count

let coinFlip
let randomNum
let loopCount = prompt('How many times would you like to play? Enter 1 - 5')
let i


for (i = 0; i < loopCount; i++) {
    randomNum = Math.floor(Math.random()*2);

    if (loopCount < 1 || loopCount > 5) {
        loopCount = prompt('Please enter a number between 1 - 5')
    }
    
    if (randomNum === 0) {
        // document.write('Heads ')
        console.log('Heads ')
    } else {
        // document.write('Tails ')
        console.log('Tails ')
    }
}




