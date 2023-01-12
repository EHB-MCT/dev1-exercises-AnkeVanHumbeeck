"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let stars = [];
let smaller = false;

setup();
update();

// blue, yellow or red and has a random saturation, lightness and opacity.

function setup() {
	for (let i = 0; i < 1000; i++) {
		let r = Utils.randomNumber(0, 2);
		if (r == 2) {
			r = 3;
		}
		let star = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			radius: Utils.randomNumber(4, 15),
			color: Utils.hsla(r * 60, Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Math.random()),
		};
		stars[i] = star;
	}
}

function update() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < 1000; i++) {
		let star = stars[i];

		if (i % 2 == 0 || i % 3 == 0) {
			drawInvader(width / 2 - 25, height / 2, false);
		} else if (i % 4 == 0 || i % 5 == 0 || i % 6 == 0) {
			drawInvader(width / 2 - 25, height / 2, true);
		}
		drawStar(stars[i]);
		check(star);
	}

	requestAnimationFrame(update);
}

function check(star) {
	if (smaller == false) {
		star.radius += 1;
	}
	if (star.radius > 25) {
		smaller = true;
	}
	if (smaller == true) {
		star.radius -= 1;
	}
	if (star.radius < 9) {
		smaller = false;
	}
}

function drawStar(star) {
	context.fillStyle = star.color;
	context.beginPath();
	context.moveTo(star.x, star.y - star.radius);
	context.arcTo(star.x, star.y, star.x + star.radius, star.y, star.radius);
	context.arcTo(star.x, star.y, star.x, star.y + star.radius, star.radius);
	context.arcTo(star.x, star.y, star.x - star.radius, star.y, star.radius);
	context.arcTo(star.x, star.y, star.x, star.y - star.radius, star.radius);
	context.fill();
}

function drawInvader(x, y, down) {
	context.fillStyle = Utils.rgb(0, 255, 0);
	if (down) {
		context.fillRect(x, y + 20, 5, 15);
		context.fillRect(x + 50, y + 20, 5, 15);
		context.fillRect(x + 5, y + 15, 5, 5);
		context.fillRect(x + 45, y + 15, 5, 5);
		context.fillRect(x + 15, y + 35, 10, 5);
		context.fillRect(x + 30, y + 35, 10, 5);
	} else {
		context.fillRect(x, y, 5, 15);
		context.fillRect(x + 50, y, 5, 15);
		context.fillRect(x + 5, y + 15, 5, 5);
		context.fillRect(x + 45, y + 15, 5, 5);
		context.fillRect(x + 5, y + 35, 5, 5);
		context.fillRect(x + 45, y + 35, 5, 5);
	}

	context.fillRect(x + 10, y, 5, 5);
	context.fillRect(x + 10, y + 10, 5, 25);
	context.fillRect(x + 15, y + 5, 5, 10);
	context.fillRect(x + 15, y + 20, 5, 10);
	context.fillRect(x + 20, y + 10, 5, 20);
	context.fillRect(x + 25, y + 10, 5, 20);
	context.fillRect(x + 30, y + 10, 5, 20);
	context.fillRect(x + 35, y + 5, 5, 10);
	context.fillRect(x + 35, y + 20, 5, 10);
	context.fillRect(x + 40, y, 5, 5);
	context.fillRect(x + 40, y + 10, 5, 25);
}
