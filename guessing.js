var goal = Math.floor((Math.random() * 100) + 1);
var count=0;

function checkGuess() {
  var guess = parseInt(document.getElementById('txtGuess').value)
  count++;
  if(goal>guess)
    alert("Higher!");
  else if (goal<guess)
    alert("Lower!");
  if(goal===guess){
    if(count===1)
      document.write("You guessed the the number \""+goal+"\" in "+count+" guess!");
    else
      document.write("You guessed the the number \""+goal+"\" in "+count+" guesses!");
  }
}
