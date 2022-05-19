
/* Computer's turn to randomly return a drawn option */
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let selection = options[Math.floor(Math.random() * 3)]
  console.log("Computer chose: " + selection);
  return selection;
}

/* Game Round using string equality conditions to determine winner 
    between user and computer selections arguments */
function playRound(playerSelection, computerSelection) {
  let outcomeText = "";

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      outcomeText = "You win!"
      
    } else if (computerSelection === "paper") {
      outcomeText = "Oh no, you lost! Paper beats rock.";
    } else {
      outcomeText = "It's a tie!"
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      outcomeText = "You win! Scissors beats paper."
    } else if (computerSelection === "rock") {
      outcomeText = "Oh no, you lost! Rock beats scissors."
    } else {
      outcomeText = "It's a tie!"
    }
  }

  if (playerSelection === "paper") {
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

/* Main game loop to hand player and computer scores and event handling */ 
function gameLoop() {
  let playerSelection = null;
  let computerSelection = null;
  let result = "";
  let playerScore = 0;
  let computerScore = 0;
  var displayResult_Simple = document.getElementById('result-1');
  var displayResult_Detailed = document.getElementById('result-2');


  // Event listeners for player's buttons and trigger computer selection
  const r_btn = document.getElementById('rock-btn');
  r_btn.addEventListener('click', () => {
    console.log("Player chose: rock")
    playerSelection = "rock";
    computerSelection = computerPlay();
  });

  const p_btn = document.getElementById('paper-btn');
  p_btn.addEventListener('click', () => {
    console.log("Player chose: paper");
    playerSelection = "paper";
    computerSelection = computerPlay();

  });

  const s_btn = document.getElementById('scissors-btn');
  s_btn.addEventListener('click', () => {
    console.log("Player chose: scissors")
    playerSelection = "scissors"
    computerSelection = computerPlay();
  });

  // Determine the results for each round
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      result = playRound(playerSelection, computerSelection);
      const results = result.split('!');

      displayResult_Simple.textContent = results[0] + "!";
      displayResult_Detailed.textContent = results[1];
      console.log(result);

      // Determine and displayer winner/loser for round
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lost")) {
        computerScore++;
      }
      console.log(playerScore + " - " + computerScore);
      var displayScore = document.getElementById('score');
      displayScore.textContent = playerScore + " - " + computerScore;

      // end game once player or computer reaches 5 points
      if (playerScore >= 5) {
        console.log("You win the game!")
        displayScore.textContent = 5 + " - " + computerScore;
          playAgain = prompt("You win!", "try again");

        if (playAgain === "try again") {
          playerScore = 0;
          computerScore = 0;
          displayResult_Simple.textContent = "";
          displayResult_Detailed.textContent = "";
          displayScore.textContent = "0 - 0";
        }

      } else if (computerScore == 5) {
        console.log("You lost the game!")
        displayScore.textContent = playerScore + " - " + 5;
          playAgain = prompt("You lose!", "try again");

        if (playAgain === "try again") {
          playerScore = 0;
          computerScore = 0;
          displayResult_Simple.textContent = "";
          displayResult_Detailed.textContent = "";
          displayScore.textContent = "0 - 0";
        }
      }
    });
  });
}

gameLoop();
