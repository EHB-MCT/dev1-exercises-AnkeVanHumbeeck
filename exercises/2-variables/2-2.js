"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 

let width= context.canvas.width;
let height= context.canvas.height;
let b;
let color;

drawSquares (50, 50, 400, 400);
drawSquares (75, 75, 350, 350);
drawSquares (100, 100, 300, 300);
drawSquares (125, 125, 250, 250);
drawSquares (150, 150, 200, 200);
drawSquares (175, 175, 150, 150);
drawSquares (200, 200, 100, 100);
drawSquares (225, 225, 50, 50);

function drawSquares(x, y, width, height) {
    let r= Math.floor(Math.random()*255);
    let g= Math.floor(Math.random()*255);
    let b= Math.floor(Math.random()*255);
    let color= "rgb(" + r + "," + g + "," + b + ")";
    context.fillStyle = color;
    context.fillRect (x, y, width, height);
}