// Setup
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const coords = document.querySelector(".display-coords");
let playerTurn = 0;
let square1 = 0;

// Get Coordinates On Click
const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = event.clientX - container.left - container.width / 2;
  const y = event.clientY - container.top - container.height / 2;

  if (x <= -127 && y <= -154) {
    console.log("Square 1");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(20, 20);
      context.lineTo(230, 230);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(230, 20);
      context.lineTo(20, 230);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(125, 125, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else if (x > -127 && x < 125 && y <= -154) {
    console.log("Square 2");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(270, 20);
      context.lineTo(480, 230);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(480, 20);
      context.lineTo(270, 230);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(375, 125, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else if (x >= 125 && y <= -154) {
    console.log("Square 3");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(520, 20);
      context.lineTo(730, 230);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(730, 20);
      context.lineTo(520, 230);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(625, 125, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else if (x <= -127 && y > -154 && y < 97) {
    console.log("Square 4");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(20, 270);
      context.lineTo(230, 480);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(230, 270);
      context.lineTo(20, 480);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(125, 375, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else if (x > -127 && x < 125 && y >= -154 && y < 97) {
    console.log("Square 5 / Middle");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(270, 270);
      context.lineTo(480, 480);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(480, 270);
      context.lineTo(270, 480);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(375, 375, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else if (x >= 125 && y > -154 && y < 97) {
    console.log("Square 6");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(520, 270);
      context.lineTo(730, 480);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(730, 270);
      context.lineTo(520, 480);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(625, 375, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else if (x <= -127 && y >= 97) {
    console.log("Square 7");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(20, 520);
      context.lineTo(230, 730);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(230, 520);
      context.lineTo(20, 730);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(125, 625, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else if (x > -127 && x < 125 && y > 97) {
    console.log("Square 8");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(270, 520);
      context.lineTo(480, 730);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(480, 520);
      context.lineTo(270, 730);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(375, 625, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
  } else {
    console.log("Square 9");
    if (playerTurn % 2 === 0) {
      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(520, 520);
      context.lineTo(730, 730);
      context.stroke();

      context.lineWidth = 10;
      context.stokeStyle = "gray";
      context.beginPath();
      context.moveTo(730, 520);
      context.lineTo(520, 730);
      context.stroke();
    } else {
      context.lineWidth = 10;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(625, 625, 115, 0, 2 * Math.PI);
      context.stroke();
    }
    playerTurn++;
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

// End Cap Semi Circles
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

document.getElementById("restart").addEventListener("click", resetCanvas);

function resetCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  playerTurn = 0;

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
}
