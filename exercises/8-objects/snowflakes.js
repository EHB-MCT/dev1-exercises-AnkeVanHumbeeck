"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let snowflakes = [];
setup();
update();

function setup() {
	for (let i = 0; i < 150; i++) {
		let snowflake = {
			size: Utils.randomNumber(3, 25),
			x: Utils.randomNumber(-20, width),
			y: Utils.randomNumber(20, 30),
			movex: Utils.randomNumber(1, 5),
			movey: Math.random() * 2,
			color: Utils.hsla(0, 100, 100, Utils.randomNumber(0, 10) / 10),
		};
		snowflakes[i] = snowflake;
	}
}

function update() {
	context.fillRect(0, 0, width, height);
	context.fillStyle = "#3d8081";
	for (let i = 0; i < 150; i++) {
		let snowflake = snowflakes[i];
		snowflake.x += snowflake.movex / Utils.randomNumber(1, 2) / 10;
		snowflake.y += snowflake.movey;
		drawSnowflake(snowflakes[i]);
	}
	requestAnimationFrame(update);
}

function drawSnowflake(snowflake) {
	context.lineWidth = 5;
	context.strokeStyle = snowflake.color;
	Utils.drawLine(snowflake.x, snowflake.y + snowflake.size, snowflake.x, snowflake.y - snowflake.size);
	Utils.drawLine(snowflake.x + snowflake.size, snowflake.y, snowflake.x - snowflake.size, snowflake.y);
	Utils.drawLine(snowflake.x - snowflake.size / Math.sqrt(2), snowflake.y - snowflake.size / Math.sqrt(2), snowflake.x + snowflake.size / Math.sqrt(2), snowflake.y + snowflake.size / Math.sqrt(2));
	Utils.drawLine(snowflake.x + snowflake.size / Math.sqrt(2), snowflake.y - snowflake.size / Math.sqrt(2), snowflake.x - snowflake.size / Math.sqrt(2), snowflake.y + snowflake.size / Math.sqrt(2));
}
