"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 

drawName();

function drawName() {
    context.strokeStyle = "blue";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(50,150);
    context.lineTo(100,50);
    context.stroke();

    context.beginPath();
    context.moveTo(100,50);
    context.lineTo(150,150);
    context.stroke();

    context.beginPath();
    context.moveTo(75,100);
    context.lineTo(125,100);
    context.stroke();

    context.strokeStyle = "violet";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(200,150);
    context.lineTo(200,50);
    context.stroke();

    context.beginPath();
    context.moveTo(200,50);
    context.lineTo(250,150);
    context.stroke();

    context.beginPath();
    context.moveTo(250,150);
    context.lineTo(250,50);
    context.stroke();

    context.strokeStyle = "purple";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(300,50);
    context.lineTo(300,150);
    context.stroke();

    context.beginPath();
    context.moveTo(300,100);
    context.lineTo(350,50);
    context.stroke();

    context.beginPath();
    context.moveTo(300,100);
    context.lineTo(350,150);
    context.stroke();

    context.strokeStyle = "pink";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(400,50);
    context.lineTo(400,150);
    context.stroke();

    context.beginPath();
    context.moveTo(400,50);
    context.lineTo(450,50);
    context.stroke();

    context.beginPath();
    context.moveTo(400,100);
    context.lineTo(450,100);
    context.stroke();

    context.beginPath();
    context.moveTo(400,150);
    context.lineTo(450,150);
    context.stroke();
    
}