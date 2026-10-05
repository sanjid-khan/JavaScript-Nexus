
const choices = ["Rock", "Paper", "Scissors"];

function playGame() {
  const player1 = choices[Math.floor(Math.random() * 3)];
  const player2 = choices[Math.floor(Math.random() * 3)];

 
  document.getElementById("player1-choice").innerText = `Player 1: ${player1}`;
  document.getElementById("player2-choice").innerText = `Player 2: ${player2}`;

 
  let winnerText = "";

  if (player1 === player2) 
    {
    winnerText = "Draw 😐";
    } 

   else if 
   (
    (player1 === "Rock" && player2 === "Scissors") ||  (player1 === "Paper" && player2 === "Rock") || (player1 === "Scissors" && player2 === "Paper")
   ) 

  {
    winnerText = "Player 1 Wins 🎉";
  }

   else 
    {
    winnerText = "Player 2 Wins 🎉";
    }

  document.getElementById("winner").innerText = `Winner: ${winnerText}`;
}


document.getElementById("play-btn").addEventListener("click", playGame);





























// 0 = Rock, 1 = Paper, 2 = Scissors
// const names = ["Rock", "Paper", "Scissors"];

// function playGame() {

//   // Random choices for both sides
//   const player1 = Math.floor(Math.random() * 3);
//   const player2 = Math.floor(Math.random() * 3);

//   let result = "";

//   if (player1 === player2) {
//     result = "Draw 😐";
//   }
//   else if (
//     (player1 === 0 && player2 === 2) ||
//     (player1 === 1 && player2 === 0) ||
//     (player1 === 2 && player2 === 1)
//   ) {
//     result = "Player 1 Wins 🎉";
//   }
//   else {
//     result = "Player 2 Wins 🎉";
//   }

//   document.getElementById("result").innerText =
//     `Player 1: ${names[player1]} | Player 2: ${names[player2]} → ${result}`;
// }


