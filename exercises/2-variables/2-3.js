"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 



let width= context.canvas.width;
let height= context.canvas.height;
let margin=50;

drawRectangles(width, height);

function drawRectangles(width,height) {
    context.beginPath();
    context.moveTo(width+margin, height+margin);
    context.rect(width+margin, height+margin, width/3, height/6);
    context.stroke();
}