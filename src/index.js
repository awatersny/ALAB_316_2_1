const setGuessPrompt = (num, attempts) => `Please guess a number from 1 to ${num} or click cancel to change the range.  You have ${attempts} chances left:`
const getRand = num => Math.floor(Math.random() * num + 1)
const rangePrompt = "Please set a range by entering a number from 10 to 100 or click cancel to quit:"
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

const btn = document.createElement("button")
btn.textContent = "Start"
btn.style.color = "white"
btn.style.backgroundColor = "blue"
btn.style.border = "10px outset skyblue"
btn.style.height = "80px"
btn.style.width = "150px"
main.appendChild(btn)

const board = document.createElement("div")
board.style.display = "flex"
board.style.flexWrap = "wrap"
board.style.alignContent = "space-around"
board.style.justifyContent = "space-between"
board.style.marginTop = "100px"
board.style.maxWidth = "540px"
main.appendChild(board)

btn.addEventListener("click", animateButtonAndPlay)

function animateButtonAndPlay(evt) {
  evt.preventDefault()
  const btn = evt.target
  btn.style.border = "10px inset skyblue"
  setTimeout(() => {
    btn.style.border = "10px outset skyblue"
  }, 100);
  setTimeout(() => {
    btn.setAttribute("hidden", true)
    mainMenu()
  }, 120);
  setTimeout(() => {
    btn.removeAttribute("hidden", true)
  }, 150)
}

/**-------------------Icebox functions--------------------*/
// function renderBoard(board, num) {
//   for(let i = 1; i <= num; i++){
//     const cell = document.createElement("div")
//     cell.style.height = "50px"
//     cell.style.width = "50px"
//     cell.style.border = "2px solid black"
//     cell.style.display = "flex"
//     cell.style.justifyContent = "center"
//     cell.style.alignItems = "center"
//     cell.textContent = i
//     cell.setAttribute("id", i)
//     board.appendChild(cell)
//   }
// }

// function clearBoard(board) {
//   while(board.firstChild) {
//     board.removeChild(board.firstChild)
//     console.log(board.childNodes)
//   }
// }
/**--------------------------------------------------------*/

function play() {
  //Prompt
  console.log(target, gameOver, guessInput, chances)
  guessInput = prompt(setGuessPrompt(outOf, chances))
  guess = parseInt(guessInput)
  if(guess >= 1 && guess <= outOf) {
    if(guess === target){
      //Alert
      alert("CONGRATUALTIONS!!! Your guess is correct!")
    } else {
      const msg = "Your guess is incorrect.  Try again." 
      if(chances > 1) {
        //Alert
        alert(`${msg}\n${guess > target ? "The number you are looking for is lower." : "The number you are looking for is higher."}` )
      } else {
        //Alert
        alert("You ran out of chances.\nGame Over")
      }
      chances--
    }
    gameOver = guess === target || chances === 0
    if(gameOver) {
      //Alert
      alert(backAlert)
    }
  } else {
    if(guessInput !== null){
      //Alert
      alert("Your guess input is invalid.")
    } else {
      //Alert
      alert(backAlert)
    }
  }
  if(guessInput !== null && !gameOver) {
    play()
  }
}

function mainMenu() {
  //Prompt
  rangeInput = prompt(rangePrompt)
  if(rangeInput !== null) {
    outOf = parseInt(rangeInput)
    if(outOf >= 10 && outOf <= 100) {
      target = getRand(outOf)
      gameOver = false
      guessInput = ""
      chances = outOf > 50 ? 10 : outOf > 10 ? 5 : 3
      play()
    } else {
      //Alert
      alert("Your input is invalid.")
    }
  }
  if (rangeInput !== null) {
    mainMenu()
  }
}