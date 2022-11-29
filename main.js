// Setup
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const coords = document.querySelector(".display-coords");
let playerTurn = 0;
let square1 = 0;
let square2 = 0;
let square3 = 0;
let square4 = 0;
let square5 = 0;
let square6 = 0;
let square7 = 0;
let square8 = 0;
let square9 = 0;

// Restart
document.getElementById("restart").addEventListener("click", resetCanvas);

function resetCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  playerTurn = 0;
  square1 = 0;
  square2 = 0;
  square3 = 0;
  square4 = 0;
  square5 = 0;
  square6 = 0;
  square7 = 0;
  square8 = 0;
  square9 = 0;
  console.clear();

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

// Get Coordinates On Click
const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = event.clientX - container.left - container.width / 2;
  const y = event.clientY - container.top - container.height / 2;

  if (x <= -127 && y <= -154) {
    console.log("Square 1");
    if (square1 === 0) {
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
        square1 = 1;
        playerTurn++;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(125, 125, 115, 0, 2 * Math.PI);
        context.stroke();
        square1 = 2;
        playerTurn++;
      }
    } else {
      console.log("Square1 already filled");
    }
  } else if (x > -127 && x < 125 && y <= -154) {
    console.log("Square 2");
    if (square2 === 0) {
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
        square2 = 1;
        playerTurn++;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(375, 125, 115, 0, 2 * Math.PI);
        context.stroke();
        square2 = 2;
        playerTurn++;
      }
    } else {
      console.log("Square2 already filled");
    }
  } else if (x >= 125 && y <= -154) {
    console.log("Square 3");
    if (square3 === 0) {
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
        square3 = 1;
        playerTurn++;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(625, 125, 115, 0, 2 * Math.PI);
        context.stroke();
        square3 = 2;
        playerTurn++;
      }
    } else {
      console.log("Square3 already filled");
    }
  } else if (x <= -127 && y > -154 && y < 97) {
    console.log("Square 4");
    if (square4 === 0) {
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
        playerTurn++;
        square4 = 1;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(125, 375, 115, 0, 2 * Math.PI);
        context.stroke();
        playerTurn++;
        square4 = 2;
      }
    } else {
      console.log("Square4 already filled");
    }
  } else if (x > -127 && x < 125 && y >= -154 && y < 97) {
    console.log("Square 5 / Middle");
    if (square5 === 0) {
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
        playerTurn++;
        square5 = 1;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(375, 375, 115, 0, 2 * Math.PI);
        context.stroke();
        playerTurn++;
        square5 = 2;
      }
    } else {
      console.log("Square5 already filled");
    }
  } else if (x >= 125 && y > -154 && y < 97) {
    console.log("Square 6");
    if (square6 === 0) {
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
        playerTurn++;
        square6 = 1;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(625, 375, 115, 0, 2 * Math.PI);
        context.stroke();
        playerTurn++;
        square6 = 2;
      }
    } else {
      console.log("Square6 already filled");
    }
  } else if (x <= -127 && y >= 97) {
    console.log("Square 7");
    if (square7 === 0) {
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
        playerTurn++;
        square7 = 1;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(125, 625, 115, 0, 2 * Math.PI);
        context.stroke();
        playerTurn++;
        square7 = 2;
      }
    } else {
      console.log("Square7 already filled");
    }
  } else if (x > -127 && x < 125 && y > 97) {
    console.log("Square 8");
    if (square8 === 0) {
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
        playerTurn++;
        square8 = 1;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(375, 625, 115, 0, 2 * Math.PI);
        context.stroke();
        playerTurn++;
        square8 = 2;
      }
    } else {
      console.log("Square8 already filled");
    }
  } else {
    console.log("Square 9");
    if (square9 === 0) {
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
        playerTurn++;
        square9 = 1;
      } else {
        context.lineWidth = 10;
        context.strokeStyle = "black";
        context.beginPath();
        context.arc(625, 625, 115, 0, 2 * Math.PI);
        context.stroke();
        playerTurn++;
        square9 = 2;
      }
    } else {
      console.log("Square9 already filled");
    }
  }

  if (square1 === 1 && square2 === 1 && square3 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 125);
    context.lineTo(670, 125);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square4 === 1 && square5 === 1 && square6 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 375);
    context.lineTo(670, 375);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square7 === 1 && square8 === 1 && square9 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 625);
    context.lineTo(670, 625);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square1 === 1 && square4 === 1 && square7 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(125, 80);
    context.lineTo(125, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square2 === 1 && square5 === 1 && square8 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(375, 80);
    context.lineTo(375, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square3 === 1 && square6 === 1 && square9 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(625, 80);
    context.lineTo(625, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square1 === 1 && square5 === 1 && square9 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 80);
    context.lineTo(670, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square3 === 1 && square5 === 1 && square7 === 1) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(670, 80);
    context.lineTo(80, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (playerTurn === 9) {
    setTimeout(resetCanvas, 5000);
  }

  if (square1 === 2 && square2 === 2 && square3 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 125);
    context.lineTo(670, 125);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square4 === 2 && square5 === 2 && square6 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 375);
    context.lineTo(670, 375);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square7 === 2 && square8 === 2 && square9 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 625);
    context.lineTo(670, 625);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square1 === 2 && square4 === 2 && square7 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(125, 80);
    context.lineTo(125, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square2 === 2 && square5 === 2 && square8 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(375, 80);
    context.lineTo(375, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square3 === 2 && square6 === 2 && square9 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(625, 80);
    context.lineTo(625, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square1 === 2 && square5 === 2 && square9 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(80, 80);
    context.lineTo(670, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (square3 === 2 && square5 === 2 && square7 === 2) {
    context.lineWidth = 5;
    context.stokeStyle = "gray";
    context.beginPath();
    context.moveTo(670, 80);
    context.lineTo(80, 670);
    context.stroke();
    setTimeout(resetCanvas, 5000);
  } else if (playerTurn === 9) {
    setTimeout(resetCanvas, 5000);
  }
}
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