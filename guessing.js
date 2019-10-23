//Inputs user's maximum desired value and randomly chooses a number from 1 to their number
var goal = Math.floor((Math.random() * parseInt(prompt("What should be the highest possible number?"))) + 1);

//Initializes count of guesses equal to 0
var count=0;

//Function to check if the guess is too high, too low, or correct
function checkGuess() {
  
  //Gets the guess out of a text box
  var guess = parseInt(document.getElementById('txtGuess').value)
  
  //Add 1 to the toal number of guesses
  count++;
  
  //Check if the guess is too low
  if(goal>guess)
    alert("Higher!");
  
  //Check if the guess is too low
  else if (goal<guess)
    alert("Lower!");
  
  //The guess was correct
  else {
    
    //The guess was correct in one attempt
    if(count===1)
      document.getElementById("lblCorrect").innerHTML = "You guessed the number \""+goal+"\" in "+count+" guess!";
    
    //The guess was correct in more than one attempt
    else
      document.getElementById("lblCorrect").innerHTML = "You guessed the number \""+goal+"\" in "+count+" guesses!";
  }
}
