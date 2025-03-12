const getRand = num => Math.floor(Math.random() * num + 1)
const rangePrompt = "Please enter a number from 10 to 100 or click cancel to quit:"
const setGuessPrompt = num => `Please guess a number from 1 to ${num} or click cancel to change the range:`
let rangeInput = ""
let guessInput = ""
let outOf = 0
let guess = 0
let target = 0

do {
  rangeInput = prompt(rangePrompt)
  if(rangeInput !== null) {
    outOf = parseInt(rangeInput)
    if(outOf >= 10 && outOf <= 100) {
      target = getRand(outOf)
      
      while(guessInput !== null) {
        guessInput = prompt(setGuessPrompt(outOf))
        guess = parseInt(guessInput)
        if(guess >= 1 && guess <= outOf) {
          alert(guess)
        } else {
          alert("Your guess input is invalid.  Please try again.")
        }
      }

    } else {
      alert("Your input is invalid.  Please try again.")
    }
  }
} while (rangeInput !== null);