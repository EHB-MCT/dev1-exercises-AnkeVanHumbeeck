"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = moveCell;

let cells = [];
let player = {
	x: width / 2,
	y: height / 2,
	size: 25,
};
setup();
update();

function setup() {
	for (let i = 0; i < 25; i++) {
		let cell = {
			x: Utils.randomNumber(30, width - 30),
			y: Utils.randomNumber(30, height - 30),
			size: Utils.randomNumber(2, 30),
			color: Utils.hsl(Utils.randomNumber(0, 360), 100, 50),
			xSpeed: Utils.randomNumber(-10, 10),
			ySpeed: Utils.randomNumber(-10, 10),
		};
		cells[i] = cell;
	}
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < cells.length; i++) {
		let cell = cells[i];
		cell.x += cell.xSpeed;
		cell.y += cell.ySpeed;
		drawCell(cells[i]);

		if (cell.x > width - cell.size || cell.x < cell.size) {
			cell.xSpeed *= -1;
		}

		if (cell.y < cell.size || cell.y > height - cell.size) {
			cell.ySpeed *= -1;
		}

		let distance = Utils.calculateDistance(player.x, player.y, cells[i].x, cells[i].y);

		if (distance < cells[i].size) {
			cells[i].size = 0;
			player.size++;
			console.log(player.size);
		}
	}

	context.fillStyle = "red";
	Utils.fillCircle(player.x, player.y, player.size);

	requestAnimationFrame(update);
}

function drawCell(player) {
	context.fillStyle = player.color;
	Utils.fillCircle(player.x, player.y, player.size);
}

/**
 *
 * @param [MouseEvent]e
 */

function moveCell(e) {
	player.x = e.pageX;
	player.y = e.pageY;
}
