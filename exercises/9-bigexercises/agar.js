"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = moveCell;
/**
 *
 * @param [MouseEvent]e
 */

let cells = [];
let player = {
	x: width / 2,
	y: height / 2,
	size: 25,
};
let isPlaying = false;
let hasLost = false;

setup();
update();

window.onclick = click;

function click(e) {
	isPlaying = true;
	context.fillStyle = "orange";
	Utils.fillCircle(e.pageX, e.pageY, 15);
}

function setup() {
	for (let i = 0; i < 25; i++) {
		let cell = {
			x: Utils.randomNumber(30, width - 30),
			y: Utils.randomNumber(30, height - 30),
			size: Utils.randomNumber(8, 40),
			color: Utils.hsl(Utils.randomNumber(0, 360), 100, 50),
			xSpeed: Utils.randomNumber(-5, 5),
			ySpeed: Utils.randomNumber(-5, 5),
		};
		cells[i] = cell;
	}
}

function update() {
	for (let i = 0; i < cells.length; i++) {
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		drawCell(cells[i]);
	}

	if (isPlaying == true) {
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
		}
	}
	for (let i = 0; i < cells.length; i++) {
		let distance = Utils.calculateDistance(player.x, player.y, cells[i].x, cells[i].y);
		if (distance < cells[i].size && player.size > cells[i].size) {
			cells[i].size = 0;
			player.size++;
			player.color = cells[i].color;
			console.log(player.size);
		}
		//you lose
		if (distance < cells[i].size && player.size < cells[i].size) {
			cells[i].color = player.color;
			isPlaying = false;
			hasLost = true;
		}
	}

	context.fillStyle = player.color;
	Utils.fillCircle(player.x, player.y, player.size);

	requestAnimationFrame(update);
}

if (hasLost == true) {
	context.fillStyle = "black";
	context.font = "bold 100px Arial";
	context.fillText("You lost", width / 2 - 250, height / 2);
}

function drawCell(player) {
	context.fillStyle = player.color;
	Utils.fillCircle(player.x, player.y, player.size);
}

function moveCell(e) {
	player.x = e.pageX;
	player.y = e.pageY;
}
