"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let ismovingRight = true;
let ismovingUp = true;
let xPos = 50;
let yPos = 50;

var speedX = 5;
var speedY = 5;

window.onclick = click;
update();

function update() {
	/*if (click) {
		
	} else {
	}*/
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);

	context.fillStyle = "blue";
	Utils.fillCircle(xPos, yPos, 50);

	requestAnimationFrame(update);

	if (ismovingUp) {
		yPos += speedY;
	} else {
		yPos -= speedY;
	}

	if (ismovingRight) {
		xPos += speedX;
	} else {
		xPos -= speedX;
	}

	if (yPos >= height - 50 || yPos <= 50) {
		ismovingUp = !ismovingUp;
	}

	if (xPos >= width - 50 || xPos <= 50) {
		ismovingRight = !ismovingRight;
	}
}

function click(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;
	let distance = Utils.calculateDistance(xPos, yPos, x, y);

	if (distance < 50) {
		//sets speed to 0
		speedX = 0;
		speedY = 0;
		//draws red circle, because of the clear canvas, not drawn
		context.fillStyle = "red";
		Utils.fillCircle(x, y, 50 / 3);
	}
}
