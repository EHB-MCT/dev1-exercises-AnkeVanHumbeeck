"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 

let width= context.canvas.width;
let height= context.canvas.height;

drawstripes (0, "#dfa142");
drawstripes (height/4, "#ea7837");
drawstripes (height/2, "#982c14");
drawstripes (3*height/4, "#061987");

function drawstripes (y, color) {
    context.beginPath();
    context.fillStyle=color;
    context.fillRect (0, y, width, height/4, color);
}

context.beginPath();
context.arc(width/2, 3*height/4, width/4, 0, Math.PI, true);
context.fillStyle="#feffcf";
context.lineWidth=0;
context.stroke();
context.fill();