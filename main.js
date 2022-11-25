// Setup
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const coords = document.querySelector(".display-coords");
let playerTurn = 0;

// Get Coordinates On Click
const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = event.clientX - container.left - container.width / 2;
  const y = event.clientY - container.top - container.height / 2;

  coords.textContent = `${x}, ${y.toFixed(0)}`;

  if (x <= -127 && y <= -154) {
    console.log("Square 1");
  } else if (x > -127 && x < 125 && y <= -154) {
    console.log("Square 2");
  } else if (x >= 125 && y <= -154) {
    console.log("Square 3");
  } else if (x <= -127 && y > -154 && y < 97) {
    console.log("Square 4");
  } else if (x > -127 && x < 125 && y >= -154 && y < 97) {
    console.log("Square 5 / Middle");
  } else if (x >= 125 && y > -154 && y < 97) {
    console.log("Square 6");
  } else if (x <= -127 && y >= 97) {
    console.log("Square 7");
  } else if (x > -127 && x < 125 && y > 97) {
    console.log("Square 8");
  } else {
    console.log("Square 9");
  }
};

canvas.addEventListener("click", getCoords);

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
