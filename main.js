let cnv = document.getElementById("myCanvas");

let ctx = cnv.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, 250, 250);

ctx.strokeStyle = "black";
ctx.strokeRect(250, 0, 250, 250);

ctx.strokeStyle = "black";
ctx.strokeRect(500, 0, 250, 250);
