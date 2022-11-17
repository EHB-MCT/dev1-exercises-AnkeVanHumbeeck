"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

/*Draw a circle which moves diagonally on the screen.
Use 2 global variables to store the x and y position of the circle.
The circle moves 10 pixels horizontally and 10 pixles vertically each frame.
When the cirlcle touches the sides of the window the horizontal movement is reversed. When it touches the bottom or top of the window the vertical movement is reversed. */

let frameCount = 0;
let ismovingRight = true;
let ismovingUp = true;
let xPos = 50;
let yPos = 50;

var speedX = 5;
var speedY = 5;

update();

function update(currentTime) {
	let lastFrameTime = 0;

	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	frameCount++;
	lastFrameTime = currentTime;

	/*if (frameCount % 10 == 0) {
		console.log(frameCount);
	}*/

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

window.onclick = click;
let distance = Utils.calculateDistance(xPos, yPos, xPos + 50, yPos + 50);

function click(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;
	//console.log(click);

	if (window.onclick) {
		console.log("I clicked");
		//sets speed to 0
		speedX = 0;
		speedY = 0;
		//draws red circle
		context.fillStyle = "red";
		Utils.fillCircle(xPos, yPos, 150);
	}
}
