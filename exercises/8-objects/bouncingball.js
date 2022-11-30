"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let ballsize = 50;
let balls = [];

let ball = {
	size: Utils.randomNumber(2, 50),
	x: Utils.randomNumber(ballsize, width - ballsize),
	y: Utils.randomNumber(ballsize, height - ballsize),
	hSpeed: Utils.randomNumber(1, 10),
	vSpeed: Utils.randomNumber(1, 10),
};

let isPlaying = true;

document.onmousedown = click;

/**
 *
 * @param {MouseEvent} e
 */
function click(e) {
	console.log(e.pageX + " " + e.pageY);
	if (Utils.calculateDistance(e.pageX, e.pageY, ball.x, ball.y) < ball.size) {
		isPlaying = false;
		context.fillStyle = "red";
		Utils.fillCircle(e.pageX, e.pageY, ball.size / 2);
	}
}

draw();

function draw() {
	if (isPlaying) {
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		context.fillStyle = "blue";
		Utils.fillCircle(ball.x, ball.y, ball.size);
		ball.x += ball.hSpeed;
		ball.y += ball.vSpeed;
		if (ball.x >= width - ball.size || ball.x <= ball.size) {
			ball.hSpeed *= -1;
		}
		if (ball.y >= height - ball.size || ball.y <= ball.size) {
			ball.vSpeed *= -1;
		}
		requestAnimationFrame(draw);
	}
}
