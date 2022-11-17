"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawDiagonalLines();
}

function drawDiagonalLines() {
	let i = 0;

	Utils.drawLine(50 + i * 25, 175 + i * 25, 175 + i * 25, 50 + i * 25);
	i++;
}
