"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

/**
 *
 * @param {MouseEvent} eventData
 */

function move(eventData) {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	context.lineWidth = 15;
	context.strokeStyle = "red";
	console.log("moved");
	let x = eventData.pageX;
	console.log(x);
	let y = eventData.pageY;
	Utils.drawLine(x, 0, x, height);
	Utils.drawLine(0, y, width, y);
}
