"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let triangles = [];
setup();
update();

function setup() {
	for (let i = 0; i < 50; i++) {
		let triangle = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			random1: Utils.randomNumber(10, 120),
			random2: Utils.randomNumber(10, 120),
			random3: Utils.randomNumber(10, 120),
			random4: Utils.randomNumber(10, 120),
			random5: Utils.randomNumber(10, 120),
			random6: Utils.randomNumber(10, 120),
			color: Utils.hsla(Utils.randomNumber(120, 220), 100, 50, 0.6),
		};
		triangles[i] = triangle;
	}
	console.log(triangles);
}

function update() {
	context.fillStyle = "#3d8081";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < 50; i++) {
		let triangle = triangles[i];
		triangle.random1 += Utils.randomNumber(-2, 2);
		triangle.random2 += Utils.randomNumber(-2, 2);
		triangle.random3 += Utils.randomNumber(-2, 2);
		triangle.random4 += Utils.randomNumber(-2, 2);
		triangle.random5 += Utils.randomNumber(-2, 2);
		triangle.random6 += Utils.randomNumber(-2, 2);
		drawTriangles(triangles[i]);
	}
	requestAnimationFrame(update);
}

function drawTriangles(triangle) {
	context.beginPath();
	context.moveTo(triangle.x + triangle.random1, triangle.y + triangle.random2);
	context.lineTo(triangle.x + triangle.random3, triangle.y + triangle.random4);
	context.lineTo(triangle.x + triangle.random5, triangle.y + triangle.random6);
	context.lineTo(triangle.x + triangle.random1, triangle.y + triangle.random2);
	context.fillStyle = triangle.color;
	context.fill();
}
