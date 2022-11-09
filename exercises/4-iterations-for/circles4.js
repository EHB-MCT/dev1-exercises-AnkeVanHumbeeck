"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
   context.fillStyle = "#E74C3C";
   for (let i = 0; i < 10000; i++) {
      let x = Math.random() * width;
      let y = Math.random() * height / 2;
      if (x > width * 1 / 4) {
         Utils.fillCircle(x, y, 2);
      }
   }
}