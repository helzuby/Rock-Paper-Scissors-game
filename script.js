const rockBtn= document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const result = document.getElementById('result');
const playerCount = document.getElementById('player-count');
const computerCount = document.getElementById('computer-count');
const computerChose = document.getElementById('computer-chose');

let playerScore = 0;
let computerScore = 0;


rockBtn.addEventListener('click', function() {
  playGame('rock');
});

paperBtn.addEventListener('click', function() {
  playGame('paper');
});

scissorsBtn.addEventListener('click', function() {
  playGame('scissors');
});

function playGame(playerChoice) {
  const options = ['rock', 'paper', 'scissors'];
  const computerChoice = options[Math.floor(Math.random() * options.length)];

computerChose.textContent = 'Computer chose: ' + computerChoice;

  // To determine when there is a winner, a tie or a lose, certain conditions are to be met.
  let winner;
  if (playerChoice === computerChoice) {
    winner = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'Player wins!';
    playerScore += 1;
    playerCount.textContent = playerScore;
  } else {
    winner = 'Computer wins!';
    computerScore += 1;
    computerCount.textContent = computerScore;
  }

  result.textContent = winner;

}

