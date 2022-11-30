"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

setup();
update();

function setup() {
	for (let i = 0; i < 50; i++) {
		let balloon = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			color: Utils.hsl(Utils.randomNumber(0, 75), 100, 50),
		};
		balloons[i] = balloon;
	}
	console.log(balloons);
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < 50; i++) {
		let balloon = balloons[i];
		balloon.y -= Utils.randomNumber(1, 10);
		balloon.x += Utils.randomNumber(-3, 3);
		drawBalloon(balloons[i]);
	}
	requestAnimationFrame(update);
}

function drawBalloon(balloon) {
	context.fillStyle = balloon.color;
	Utils.fillEllipse(balloon.x, balloon.y, 50, 80);
	Utils.drawLine(balloon.x, balloon.y + 150, balloon.x, balloon.y + 75);
}
