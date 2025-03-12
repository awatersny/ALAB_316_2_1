const setGuessPrompt = (num, attempts) => `Please guess a number from 1 to ${num} or click cancel to change the range.  You have ${attempts} chances left:`
const getRand = num => Math.floor(Math.random() * num + 1)
const rangePrompt = "Please enter a number from 10 to 100 or click cancel to quit:"
const backAlert = `Returning to main menu.\nClick "Ok" or press either "Enter" (Windows) or "Return" (Mac).`
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
      gameOver = false
      chances = 10
      console.log(chances)
      while(guessInput !== null && !gameOver) {
        guessInput = prompt(setGuessPrompt(outOf, chances))
        guess = parseInt(guessInput)
        if(guess >= 1 && guess <= outOf) {
          console.log(`Guess: ${guess} Target: ${target}`) // Sanity check.  Delete after final build
          if(guess === target){
            alert("CONGRATUALTIONS!!! Your guess is correct!")
          } else {
            alert(chances > 1 ? "Your guess is incorrect.  Try again." : "You ran out of chances.")
            if(chances > 1) {
                alert(guess > target ? "The number you are looking for is lower." : "The number you are looking for is higher.")
            } else {
              alert("Game Over")
            }
            chances--
          }
          gameOver = guess === target || chances === 0
          if(gameOver) {
            alert(backAlert)
          }
        } else {
          if(guessInput !== null){
            alert("Your guess input is invalid.")
          } else {
            alert(backAlert)
          }
        }
      } 
    } else {
      alert("Your input is invalid.")
    }
  }
} while (rangeInput !== null);