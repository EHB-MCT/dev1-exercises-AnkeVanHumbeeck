"use strict";

import context from "./context.js";


/**
 * fill a circle 
 * @param {number} x x-coordinate of the center of the circle
 * @param {number} y y-coordinate of the center of the circle
 * @param {number} r the radius od the circle
 */

export function fillcircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2);
    context.fill();
}

export function drawLine (x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo (x1, y1);
    context.lineTo (x2, y2);
    context.stroke ();
}