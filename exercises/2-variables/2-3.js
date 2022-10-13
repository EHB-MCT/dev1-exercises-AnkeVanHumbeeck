"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 



let margin= (50);
let width= (context.canvas.width)-2*margin;
let height= (context.canvas.height)-2*margin;


drawRectangle(margin, margin, width/3, height/6, "#303d4e");
drawRectangle(margin+width/3, margin, width/3, height/6, "#edf1f0");
drawRectangle(width-width/3+margin, margin, width/3, height/6, "#303d4e");
drawRectangle(margin, margin+(height/6), width, height/3, "#d65644");
drawRectangle(margin, margin+height/2, width/3, height/6,"#303d4e" );
drawRectangle(width-width/3+margin,margin+height/2,width/3, height/6, "#303d4e");
drawRectangle(margin+width/3, margin+height/2, width/3, height/2, "#edf1f0");
drawRectangle(margin, margin+(4*height/6), width/3, height/3,"#5396d4");
drawRectangle(width-width/3+margin, margin+(4*height/6),width/3, height/3,"#5396d4");



function drawRectangle(x ,y, width, height, color) {
   margin=50;
   context.fillStyle = color;
   context.fillRect (x, y, width, height, color);
}