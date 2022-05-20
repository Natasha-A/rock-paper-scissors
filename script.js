
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
  var playerImg = document.getElementById("pImg");
  var computerImg = document.getElementById("cImg")

  if (playerSelection === "rock") {
    playerImg.src = "./assets/rock/rock-color.svg"
    if (computerSelection === "scissors") {
      cImg.src = "./assets/scissors/scissors-color.svg"
      outcomeText = "You win! Rock beats scissors."
      
    } else if (computerSelection === "paper") {
      cImg.src = "./assets/paper/paper-color.svg"
      outcomeText = "Oh no, you lost! Paper beats rock.";
    } else {
      cImg.src = "./assets/rock/rock-color.svg"
      outcomeText = "It's a tie!"
    }
  }

  if (playerSelection === "scissors") {
    playerImg.src = "./assets/scissors/scissors-color.svg"
    if (computerSelection === "paper") {
      computerImg.src = "./assets/paper/paper-color.svg"
      outcomeText = "You win! Scissors beats paper."
    } else if (computerSelection === "rock") {
      computerImg.src = "./assets/rock/rock-color.svg"
      outcomeText = "Oh no, you lost! Rock beats scissors."
    } else {
      computerImg.src = "./assets/scissors/scissors-color.svg"
      outcomeText = "It's a tie!"
    }
  }

  if (playerSelection === "paper") {
    playerImg.src = "./assets/paper/paper-color.svg"
    if (computerSelection === "rock") {
      computerImg.src = "./assets/rock/rock-color.svg"
      outcomeText = "You win! Paper beats rock."
    } else if (computerSelection === "scissors") {
      computerImg.src = "./assets/scissors/scissors-color.svg"
      outcomeText = "Oh no, you lost! Scissors beats paper."
    } else {
      computerImg.src = "./assets/paper/paper-color.svg"
      outcomeText = "It's a tie!"
    }
  }
  return outcomeText;
}

/* Main game loop to hand player and computer scores and event handling */ 
function gameLoop() {
  let playerSelection = null;
  let computerSelection = null;
  var playerImg = document.getElementById("pImg");
  var computerImg = document.getElementById("cImg")
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
  const buttons = document.querySelectorAll('#paper-btn, #scissors-btn, #rock-btn');
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
        outcome = "YOU WIN!";
        displayScore.textContent = 5 + " - " + computerScore;
        openModalButton(outcome, displayScore.textContent);

          playerScore = 0;
          computerScore = 0;
          playerImg.src = "./assets/default_icon.png"
          computerImg.src = "./assets/default_icon.png"
          displayResult_Simple.textContent = "";
          displayResult_Detailed.textContent = "";
          displayScore.textContent = "0 - 0";


      } else if (computerScore == 5) {
        outcome = "YOU LOSE!";
        displayScore.textContent = playerScore + " - " + 5;
        openModalButton(outcome, displayScore.textContent);

          playerScore = 0;
          computerScore = 0;
          playerImg.src = "./assets/default_icon.png"
          computerImg.src = "./assets/default_icon.png"
          displayResult_Simple.textContent = "";
          displayResult_Detailed.textContent = "";
          displayScore.textContent = "0 - 0";

      }
    });
  });
}

/* Game button move hover functions to change images */ 
function hover(name,element) {
  element.setAttribute('src', './assets/' + name + '/' + name + '-color.png')
}

function unhover(name, element) {
  element.setAttribute('src', './assets/' + name + '/' + name + '-outline.png')
}

/* Modal button handling */
const openModalButtons = document.querySelectorAll('[data-modal-target]');

function openModalButton(outcome, score) {
openModalButtons.forEach(button => {
  const modal = document.querySelector(button.dataset.modalTarget);
  openModal(modal);

  var outcomeText = document.querySelector("#title")
  outcomeText.textContent = outcome;
  var scoreLabel = document.querySelector(" #scoreLabel");
scoreLabel.textContent = score;
})


}

const closeModalButtons = document.querySelectorAll('[data-close-button]');

const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

function openModal(modal) {
  if (modal == null) return 
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
gameLoop();
