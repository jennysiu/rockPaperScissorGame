// console.log("Ding")

// Psuedo:

// - assign player1 and bot player

// ask the user1 to choose - "R, P, or S"

// bot randomly pick: "R, P, S"

// choose a winner based on conditionns

// keep track of scores

// option to go again: - 10 rounds total: play again after the round has finished

// - after 10 rounds: console log - total wins, ties, and loses
// 


// assign score trackers
let win = 0;
let lose = 0;
let draw = 0;

// for loop to go 10 rounds
for (rounds = 0; rounds < 10; rounds++){
  // ***USER TURN
  let userTurn = prompt("Rock, paper, or scissors? (Use: R, P, or S)"); 

  // choices
  let choices = ["R", "P", "S"];
  
  // ***BOT TURN
  // random number generator
  let randomIndex = Math.floor(Math.random() * 3);
  // map the random number to choices
  let randomChoice = choices[randomIndex];
  let botTurn = randomChoice;
  alert(`Bot turn: ${botTurn}`)

  let roundMessage = `Your turn: ${userTurn} \nBot turn: ${botTurn}`;
  alert(roundMessage);

  // ***CONDITIONALS
  if (userTurn == "R" && botTurn =="S") {
    win = win +1; 
    alert("You win!")
  } else if (userTurn == "R" && botTurn =="R") {
    draw = draw + 1;
    alert("It's a draw!")
  } else if (userTurn == "R" && botTurn =="P") {
    lose = lose + 1;
    alert("Sorry, you lose.")
    // papers
  } else if (userTurn == "P" && botTurn =="R") {
    win = win +1;
    alert("You win!")
  } else if (userTurn == "P" && botTurn =="P") {
    draw = draw + 1;
    alert("It's a draw!")
  } else if (userTurn == "P" && botTurn =="S") {
    lose = lose + 1;
    alert("Sorry, you lose.")
    // scissors
  } else if (userTurn == "S" && botTurn =="P") {
    win = win +1;
    alert("You win!")
  } else if (userTurn == "S" && botTurn =="S") {
    draw = draw + 1;
    alert("It's a draw!")
  } else if (userTurn == "S" && botTurn =="R") {
    lose = lose + 1;
    alert("Sorry, you lose.")
  } 
    
    // Ask if user wants to play again
  let playAgain = prompt("Play again? (Y or N)");
    if (playAgain == "Y") {
    } else if (playAgain == "N") {
      break;
    } 
}

// Alert scores
let endMessage = `Wins: ${win} \nLoses: ${lose} \nDraws: ${draw}` 
alert(endMessage);

