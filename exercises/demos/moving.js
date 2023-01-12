"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

//window.onkeydown = move;

setup();

//update();

function setup() {
	let ball = {
		x: width / 2,
		y: height / 2,
	};
	Utils.fillCircle(ball.x, ball.y, 50);
}

/**
 *
 * @param [KeyboardEvent]e
 */
