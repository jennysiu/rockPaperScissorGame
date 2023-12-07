
// assign score trackers
let win = 0;
let lose = 0;
let draw = 0;

// for loop to go 10 rounds
for (rounds = 0; rounds < 10; rounds++){
  // choices
  let choices = ["R", "P", "S"];
  
  // ***USER TURN
  let userTurn = prompt("Rock, paper, or scissors? (Please type: R, P, or S)").toUpperCase(); 
    while (!choices.includes(userTurn)) {
      userTurn = prompt("INVALID choice. Please type R, P, or S!")
    } 
  
  // ***BOT TURN
  // random number generator
  let randomIndex = Math.floor(Math.random() * 3);
  // map the random number to choices
  let randomChoice = choices[randomIndex];
  let botTurn = randomChoice;
  // alert(`Bot turn: ${botTurn}`)

  let roundMessage = `Your turn: ${userTurn} \nBot turn: ${botTurn}`;
  // alert(roundMessage);

  // ***CONDITIONALS
  if (userTurn == "R" && botTurn =="S") {
    win = win +1; 
    alert(roundMessage + "\nYou win!")
  } else if (userTurn == "R" && botTurn =="R") {
    draw = draw + 1;
    alert(roundMessage + "\nIt's a draw!")
  } else if (userTurn == "R" && botTurn =="P") {
    lose = lose + 1;
    alert(roundMessage + "\nSorry, you lose.")
    // papers
  } else if (userTurn == "P" && botTurn =="R") {
    win = win +1;
    alert(roundMessage + "\nYou win!")
  } else if (userTurn == "P" && botTurn =="P") {
    draw = draw + 1;
    alert(roundMessage + "\nIt's a draw!")
  } else if (userTurn == "P" && botTurn =="S") {
    lose = lose + 1;
    alert(roundMessage + "\nSorry, you lose.")
    // scissors
  } else if (userTurn == "S" && botTurn =="P") {
    win = win +1;
    alert(roundMessage + "\nYou win!")
  } else if (userTurn == "S" && botTurn =="S") {
    draw = draw + 1;
    alert(roundMessage + "\nIt's a draw!")
  } else if (userTurn == "S" && botTurn =="R") {
    lose = lose + 1;
    alert(roundMessage + "\nSorry, you lose.")
  } 
    
    // Ask if user wants to play again
  let playAgain = confirm("Play again?");
    if (playAgain == true) {
    } else {
      break;
    } 
}

// Alert scores
let endMessage = `Wins: ${win} \nLoses: ${lose} \nDraws: ${draw} \nThanks for playing!!` 
alert(endMessage);

