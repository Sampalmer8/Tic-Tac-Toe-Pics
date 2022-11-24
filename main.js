// Background
let backgroundImage = document.getElementById("wood");

// Setup
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const coords = document.querySelector(".display-coords");

// Get Coordinates On Click
const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = event.clientX - container.left - container.width / 2;
  const y = event.clientY - container.top - container.height / 2;

  coords.textContent = `${x}, ${y.toFixed(1)}`;
};

canvas.addEventListener("click", getCoords);

// Background
context.drawImage(backgroundImage, 0, 0);
context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

// Trsanparency
context.globalAlpha = 0.6;

// Lines
context.lineWidth = 5;
context.stokeStyle = "gray";
context.beginPath();
context.moveTo(250, 10);
context.lineTo(250, 740);
context.stroke();

context.lineWidth = 5;
context.stokeStyle = "gray";
context.beginPath();
context.moveTo(500, 10);
context.lineTo(500, 740);
context.stroke();

context.lineWidth = 5;
context.stokeStyle = "gray";
context.beginPath();
context.moveTo(10, 250);
context.lineTo(740, 250);
context.stroke();

context.lineWidth = 5;
context.stokeStyle = "gray";
context.beginPath();
context.moveTo(10, 500);
context.lineTo(740, 500);
context.stroke();

//End Cap Semi Circles
context.beginPath();
context.ellipse(250, 10, 0.3, 4, Math.PI, 0, Math.PI);
context.stroke();

context.beginPath();
context.ellipse(500, 10, 0.3, 4, Math.PI, 0, Math.PI);
context.stroke();

context.beginPath();
context.ellipse(250, 740, 0.3, 4, Math.PI * 2, 0, Math.PI);
context.stroke();

context.beginPath();
context.ellipse(500, 740, 0.3, 4, Math.PI * 2, 0, Math.PI);
context.stroke();

context.beginPath();
context.ellipse(10, 250, 0.3, 4, Math.PI * 0.5, 0, Math.PI);
context.stroke();

context.beginPath();
context.ellipse(10, 500, 0.3, 4, Math.PI * 0.5, 0, Math.PI);
context.stroke();

context.beginPath();
context.ellipse(740, 250, 0.3, 4, Math.PI * 1.5, 0, Math.PI);
context.stroke();

context.beginPath();
context.ellipse(740, 500, 0.3, 4, Math.PI * 1.5, 0, Math.PI);
context.stroke();

// Player Variables / Game function
let playerTurn = 0;
let player1 = true;
let player2 = false;

if (playerTurn === 0) {
  player1 = true;
  player2 = false;
} else {
  player1 = false;
  player2 = true;
}