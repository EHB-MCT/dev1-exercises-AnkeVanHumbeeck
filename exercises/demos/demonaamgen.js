"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);

let names = ["Peter", "Ali", "Sofia", "Bent", "Laura"];

let r = Utils.randomNumber(0, names.length - 1);

for (let i = names.length - 1; i < 5; i++) console.log(names[i]);
