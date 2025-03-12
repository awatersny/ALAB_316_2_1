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

const body = document.querySelector("body")

const main = document.createElement("main")
main.style.display = "flex"
main.style.flexDirection = "column"
main.style.alignItems = "center"
main.style.justifyContent = "center"
main.style.height = "500px"
body.appendChild(main)

init()

function renderBoard(num) {
  const board = document.createElement("div")
  board.style.display = "flex"
  board.style.flexWrap = "wrap"
  board.style.alignContent = "space-around"
  board.style.justifyContent = "space-between"
  board.style.marginTop = "500px"
  board.style.maxWidth = "540px"
  main.appendChild(board)
  for(let i = 1; i <= num; i++){
    const cell = document.createElement("div")
    cell.style.height = "50px"
    cell.style.width = "50px"
    cell.style.border = "2px solid black"
    cell.style.display = "flex"
    cell.style.justifyContent = "center"
    cell.style.alignItems = "center"
    cell.textContent = i
    board.appendChild(cell)
  }
}

function init() {
  const btn = document.createElement("button")
  btn.textContent = "Start"
  btn.style.color = "white"
  btn.style.backgroundColor = "blue"
  btn.style.border = "10px outset skyblue"
  btn.style.height = "80px"
  btn.style.width = "150px"
  main.appendChild(btn)
  btn.addEventListener("click", () => {
    console.log("clicked")
    btn.style.border = "10px inset skyblue"
    setTimeout(() => {
      btn.style.border = "10px outset skyblue"
    }, 100);
    setTimeout(() => {
      btn.setAttribute("hidden", true)
    }, 120);
    setTimeout(() => {
      play()
      btn.removeAttribute("hidden", true)
    }, 150)
  })
}

function play() {
  do {
    rangeInput = prompt(rangePrompt)
    if(rangeInput !== null) {
      outOf = parseInt(rangeInput)
      if(outOf >= 10 && outOf <= 100) {
        target = getRand(outOf)
        gameOver = false
        guessInput = ""
        chances = outOf > 50 ? 10 : outOf > 10 ? 5 : 3
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
}