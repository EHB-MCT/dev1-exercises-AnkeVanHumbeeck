"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 6) {
        Utils.drawLine(25*i+50, 25*i+200, 25*i+200, 25*i+50);
        Utils.drawLine(25*i+50, 200-25*i, 25*i+200, 350-25*i);
        i++;
    }
}


/*Utils.drawLine(50, 175, 225, 350);
Utils.drawLine(75, 150, 250, 325);

context.beginPath();
context.strokeStyle= "black";
context.moveTo (50, 175);
context.lineTo (225, 350);
context.stroke ();*/