"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = movePaddle;
let balls = [];

let player1 = {
	y: height - 100,
	x: width / 2,
	w: 200,
};
let player2 = {
	y: 75,
	x: width / 2,
	w: 200,
};

let score1 = 0;
let score2 = 0;

setup();
draw();

function setup() {
	for (let i = 0; i < 10; i++) {
		let Ball = {
			x: Utils.randomNumber(25, width - 25),
			y: height / 2,
			size: 10,
			xSpeed: Utils.randomNumber(-5, 5),
			ySpeed: 5,
		};
		balls[i] = Ball;
	}
}
function draw() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < balls.length; i++) {
		let Ball = balls[i];
		Ball.x += Ball.xSpeed;
		Ball.y += Ball.ySpeed;

		context.fillStyle = "white";
		context.fillRect(player1.x, player1.y, 150, 25);

		context.fillRect(player2.x, player2.y, 150, 25);
		Utils.fillCircle(Ball.x, Ball.y, 10);

		if (Ball.y <= 0) {
			score1++;
			Ball.x = width / 2;
			Ball.y = height / 2;
			Ball.xSpeed = 5;
		}

		if (Ball.y >= height) {
			score2++;
			Ball.x = width / 2;
			Ball.y = height / 2;
			Ball.xSpeed = 5;
		}
		if (Ball.y <= 0) {
			score1++;
			Ball.x = width / 2;
			Ball.y = height / 2;
			Ball.xSpeed = 5;
		}
		if (Ball.x >= width - 10 || Ball.x < 10) {
			Ball.xSpeed *= -1;
		}
		if (Ball.y >= height - 100) {
			if (Ball.x >= player1.x && Ball.x <= player1.x + 150) {
				Ball.ySpeed *= -1;
			}
		}
		if (Ball.y >= 100) {
			if (Ball.x >= player1.x && Ball.x <= player1.x + 150) {
				Ball.ySpeed *= -1;
			}
		}
	}

	let n = width / 100;

	//draws the line (middle)
	for (let i = 0; i < n; i++) {
		context.fillRect(i * 100, height / 2 - 12.5, 50, 25);
	}

	//writes the score
	context.font = "bold 100px Arial";
	context.fillText(score2, 50, height / 2 - 100);
	context.fillText("0", 50, height / 2 + 100);

	requestAnimationFrame(draw);
}

function resetBall(bol) {
	bol.x = Utils.randomNumber(25, width - 25);
	bol.y = height / 2;
	bol.xSpeed = Utils.randomNumber(-5, 5);
	bol.ySpeed = 5;
}

function movePaddle(e) {
	player1.x = e.pageX - 75;
}
