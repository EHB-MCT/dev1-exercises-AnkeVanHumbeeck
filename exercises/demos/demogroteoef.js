"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = movePaddle;
let balls = [];

let Player1 = {
	y: height / 2,
	x: width / 2,
	w: 200,
};
let Player2 = {
	y: height / 2,
	x: width / 2,
	w: 200,
};

let score1 = 0;
let score2 = 0;
let xSpeed = 5;
let ySpeed = 5;

let playerX = width / 2 - 75;
let player2X = width / 2 - 75;

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
		context.fillRect(playerX, height - 100, 150, 25);
		player1x, player1y, player1.w;
		context.fillRect(player2X, 75, 150, 25);
		player2.Utils.fillCircle(x, y, 10);

		if (Ball.y <= 0) {
			score1++;
			x = width / 2;
			y = height / 2;
			xSpeed = 5;
		}

		if (Ball.y >= height) {
			score2++;
			x = width / 2;
			y = height / 2;
			xSpeed = 5;
		}
		if (x >= width - 10 || x < 10) {
			xSpeed *= -1;
		}
		if (y >= height - 100) {
			if (x >= playerX && x <= playerX + 150) {
				ySpeed *= -1;
			}
		}
		if (y >= 100) {
			if (x >= playerX && x <= playerX + 150) {
				ySpeed *= -1;
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
	playerX = e.pageX - 75;
}
