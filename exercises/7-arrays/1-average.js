"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

calculateAverage();

function calculateAverage() {
	let numbers = [];

	for (let i = 0; i < 100; i++) {
		numbers[i] = i;
	}

	console.log(numbers);
	let average = (Utils.randomNumber(0, numbers.length - 1) + Utils.randomNumber(0, numbers.length - 1)) / 2;
	console.log(average);
}
