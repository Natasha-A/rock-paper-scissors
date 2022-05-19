
/* Computer's turn to randomly return a drawn option */
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let selection = options[Math.floor(Math.random() * 3)]
  return selection;
}

/* Game Round using string equality conditions to determine winner 
    between user and computer selections arguments */
function playRound(playerSelection, computerSelection) {
  let outcomeText = "";
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      outcomeText = "You win! Rock beats scissors.";
    } else if (computerSelection === "paper") {
      outcomeText = "Oh no, you lost! Paper beats rock.";
    } else {
      outcomeText = "It's a tie!"
    }
  } 

  if ( playerSelection === "scissors") {
    if (computerSelection === "paper") {
      outcomeText = "You win! Scissors beats paper."
    } else if (computerSelection === "rock") {
      outcomeText = "Oh no, you lost! Rock beats scissors."
    } else {
      outcomeText = "It's a tie!"
    }
  }

  if ( playerSelection === "paper") {
    if (computerSelection === "rock") {
      outcomeText = "You win! Paper beats rock."
    } else if (computerSelection === "scissors") {
      outcomeText = "Oh no, you lost! Scissors beats paper."
    } else {
      outcomeText = "It's a tie!"
    }
  }
  return outcomeText;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i < 5; i++) {
    let playerSelection = prompt("Enter your match choice: ");
    let pSelection_result = playerSelection.toLowerCase();
    const computerSelection = computerPlay();

    // verify user's input
    while (pSelection_result === "") {
     alert("Incorrect input. Please enter either 'rock', 'paper', or 'scissors'.")
      pSelection_result = prompt("Enter your match choice again:");
      console.log(pSelection_result);
    }

    let result = playRound(pSelection_result, computerSelection);
    console.log(result);

    // determine winner based on results text 
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lost")) {
      computerScore++;
    }

  }

  console.log("Wins: " +  playerScore);
  console.log("Loses: " + computerScore);
}

game();
