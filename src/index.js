let rangeInput = ""
do {
  let outOf = 0
  rangeInput = prompt("Please enter a number from 10 to 100:")
  if(rangeInput !== null) {
    outOf = parseInt(rangeInput)
    if(outOf > 9 && outOf < 101) {
  
    } else {
      alert("Invalid Input")
    }
  }
} while (rangeInput !== null);