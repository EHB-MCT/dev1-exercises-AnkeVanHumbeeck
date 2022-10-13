"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 



let margin= (50);
let width= (context.canvas.width)-2*margin;
let height= (context.canvas.height)-2*margin;


drawRectangle(margin, margin, width/3, height/6, "#303D4E");
drawRectangle(width-width/3+margin, margin, width/3, height/6, "#303D4E");
drawRectangle(margin, margin+(height/6), width, height/3, "#D65745");
drawRectangle(margin, 2*height/3, width/3, height/6,"#303D4E" );
drawRectangle(width-width/3+margin,2*height/3,width/3, height/6, "#303D4E");
drawRectangle(margin, height-height/6, width/3, height/3,"#5296D5");
drawRectangle(width-width/3+margin, height-height/6,width/3, height/3,"#5296D5");



function drawRectangle(x ,y, width, height, color) {
   margin=50;
   context.fillStyle = color;
   context.fillRect (x, y, width, height, color);
}