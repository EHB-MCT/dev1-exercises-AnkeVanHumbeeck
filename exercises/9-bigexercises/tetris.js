"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let iblock = {
	width: 50,
	height: 50,
	color: Utils.hsl(Utils.randomNumber(0, 360), 100, 50),
};
let playfieldWidth = (3 * width) / 9;

let shapes = {
	x: playfieldWidth + 4 * iblock.width,
	y: 0,
};

setup();
update();

function setup() {
	/*canvas */
	context.fillStyle = "3ED0DF";
	context.fillRect(0, 0, width, height);
	context.fillStyle = "gray";
	context.fillRect((3 * width) / 9, 0, iblock.width * 11, iblock.width * 17);
	/*grid */
	for (let i = 0; i < 12; i++) {
		context.strokeStyle = "white";
		context.lineWidth = 5;
		Utils.drawLine(playfieldWidth + iblock.height * i, 0, playfieldWidth + iblock.height * i, iblock.height * 17);
	}
	/*horizontal lines */
	for (let i = 0; i < 20; i++) {
		Utils.drawLine((3 * width) / 9, iblock.width * i, (3 * width) / 9 + iblock.width * 11, iblock.width * i);
	}

	let r = Utils.randomNumber(1, 7);
	if (r == 1) {
		tBlock();
	} else if (r == 2) {
		leftLBlock();
	} else if (r == 3) {
		rightLBlock();
	} else if (r == 4) {
		squareBlock();
	} else if (r == 5) {
		lineBlock();
	} else if (r == 6) {
		leftSquigleBlock();
	} else if (r == 7) {
		rightSquigleBlock();
	}
}
function update() {
	for (let i = 0; i < 10; i++) {
		shapes.y += iblock.width;
	}
	requestAnimationFrame(update);
}

function individualBlock(x, y) {
	context.fillStyle = iblock.color;
	context.fillRect(x, y, iblock.width, iblock.height);
	context.strokeStyle = "black";
	context.lineWidth = 5;
	context.strokeRect(x, y, iblock.width, iblock.height);
}

function tBlock() {
	individualBlock(shapes.x, shapes.y);
	individualBlock(shapes.x + iblock.width, shapes.y);
	individualBlock(shapes.x + 2 * iblock.width, shapes.y);
	individualBlock(shapes.x + iblock.width, shapes.y + iblock.height);
}
function leftLBlock() {
	individualBlock(shapes.x, shapes.y);
	individualBlock(shapes.x, shapes.y + iblock.height);
	individualBlock(shapes.x + iblock.width, shapes.y + iblock.height);
	individualBlock(shapes.x + 2 * iblock.width, shapes.y + iblock.height);
}
function rightLBlock() {
	individualBlock(shapes.x + 2 * iblock.width, shapes.y);
	individualBlock(shapes.x, shapes.y + iblock.height);
	individualBlock(shapes.x + iblock.width, shapes.y + iblock.height);
	individualBlock(shapes.x + 2 * iblock.width, shapes.y + iblock.height);
}
function squareBlock() {
	individualBlock(shapes.x, shapes.y);
	individualBlock(shapes.x + iblock.width, shapes.y);
	individualBlock(shapes.x, shapes.y + iblock.height);
	individualBlock(shapes.x + iblock.width, shapes.y + iblock.height);
}
function lineBlock() {
	individualBlock(shapes.x + iblock.width, shapes.y);
	individualBlock(shapes.x + iblock.width, shapes.y + iblock.height);
	individualBlock(shapes.x + iblock.width, shapes.y + 2 * iblock.height);
	individualBlock(shapes.x + iblock.width, shapes.y + 3 * iblock.height);
}
function leftSquigleBlock() {
	individualBlock(shapes.x, shapes.y);
	individualBlock(shapes.x + iblock.width, shapes.y);
	individualBlock(shapes.x + iblock.width, shapes.y + iblock.height);
	individualBlock(shapes.x + 2 * iblock.width, shapes.y + iblock.height);
}
function rightSquigleBlock() {
	individualBlock(shapes.x, shapes.y + iblock.height);
	individualBlock(shapes.x + iblock.width, shapes.y);
	individualBlock(shapes.x + iblock.width, shapes.y + iblock.height);
	individualBlock(shapes.x + 2 * iblock.width, shapes.y);
}
