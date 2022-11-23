let cnv = document.getElementById("myCanvas");
const canvas = document.querySelector("myCanvas");
let ctx = cnv.getContext("2d");

const coords = document.querySelector(".display-coords");

// Background
let background = document.getElementById("wood");
ctx.drawImage(background, 0, 0, 750, 750);

// Trsanparency
ctx.globalAlpha = 0.6;

// Lines
ctx.lineWidth = 5;
ctx.stokeStyle = "gray";
ctx.beginPath();
ctx.moveTo(250, 10);
ctx.lineTo(250, 740);
ctx.stroke();

ctx.lineWidth = 5;
ctx.stokeStyle = "gray";
ctx.beginPath();
ctx.moveTo(500, 10);
ctx.lineTo(500, 740);
ctx.stroke();

ctx.lineWidth = 5;
ctx.stokeStyle = "gray";
ctx.beginPath();
ctx.moveTo(10, 250);
ctx.lineTo(740, 250);
ctx.stroke();

ctx.lineWidth = 5;
ctx.stokeStyle = "gray";
ctx.beginPath();
ctx.moveTo(10, 500);
ctx.lineTo(740, 500);
ctx.stroke();

// End Cap Semi Circles
ctx.beginPath();
ctx.ellipse(250, 10, 0.3, 4, Math.PI, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(500, 10, 0.3, 4, Math.PI, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(250, 740, 0.3, 4, Math.PI * 2, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(500, 740, 0.3, 4, Math.PI * 2, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(10, 250, 0.3, 4, Math.PI * 0.5, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(10, 500, 0.3, 4, Math.PI * 0.5, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(740, 250, 0.3, 4, Math.PI * 1.5, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(740, 500, 0.3, 4, Math.PI * 1.5, 0, Math.PI);
ctx.stroke();

// Event Listener to get coords
const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = event.clientX - container.left - container.width / 2;
  const y = event.clientY - container.top - container.height / 2;

  coords.textContent = `${x}, ${y}`;
};

canvas.addEventListener("click", getCoords);
