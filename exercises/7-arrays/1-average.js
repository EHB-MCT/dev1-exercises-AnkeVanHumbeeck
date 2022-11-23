"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let numbers = [];
let total = 0;

for (let i = 0; i < 1000; i++) {
	numbers[i] = Utils.randomNumber(0, 100);
}
console.log(numbers);
calculateAverage(numbers);

function calculateAverage() {
	for (let i = 0; i < 1000; i++) {
		total += numbers[i];
	}
}

let average = total / numbers.length;
console.log(average);
