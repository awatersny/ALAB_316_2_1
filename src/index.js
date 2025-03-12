const setGuessPrompt = num => `Please guess a number from 1 to ${num} or click cancel to change the range:`
const getRand = num => Math.floor(Math.random() * num + 1)
const rangePrompt = "Please enter a number from 10 to 100 or click cancel to quit:"
let gameOver = false
let rangeInput = ""
let guessInput = ""
let chances = 0
let target = 0
let guess = 0
let outOf = 0

do {
  rangeInput = prompt(rangePrompt)
  if(rangeInput !== null) {
    outOf = parseInt(rangeInput)
    if(outOf >= 10 && outOf <= 100) {
      target = getRand(outOf)
      
      do {
        guessInput = prompt(setGuessPrompt(outOf))
        guess = parseInt(guessInput)
        if(guess >= 1 && guess <= outOf) {
          chances = 10
          console.log(`Guess: ${guess} Target: ${target}`) // Sanity check.  Delete after final build
          if(guess === target){
            alert("CONGRATUALTIONS!!! Your guess is correct!")
            alert("Going back to main menu...")
          }
          gameOver = guess === target || chances === 0
        } else {
          if(guessInput !== null){
            alert("Your guess input is invalid.  Please try again.")
          } else {
            alert("Going back to main menu...")
          }
        }
      } while(guessInput !== null && !gameOver)

    } else {
      alert("Your input is invalid.  Please try again.")
    }
  }
} while (rangeInput !== null);