"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = changeColor;

let frameCount = 0;

let mouseHue = 0;

update();

function update() {
	if (frameCount % 2 == 0) {
		console.log(mouseHue);
		let x = Utils.randomNumber(0, width);
		let y = Utils.randomNumber(0, height);
		let size = Utils.randomNumber(10, 100);
		drawBubble(x, y, size, mouseHue);
	} else {
		//console.log("dont");
	}
	frameCount++;
	requestAnimationFrame(update);
}

function drawBubble(x, y, size, hue) {
	context.fillStyle = Utils.hsl(hue, 50, 50);
	Utils.fillCircle(x, y, size);
	context.fillStyle = Utils.hsl(hue, 50, 75);
	Utils.fillCircle(x + size / 3, y - size / 3, size / 4);
}

/**
 *
 * @param {MouseEvent} eventData
 */
function changeColor(eventData) {
	mouseHue = (eventData.pageX / width) * 360;
}
