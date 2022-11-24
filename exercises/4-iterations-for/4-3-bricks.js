"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let margin = 5;
let brickWidth = 100;
let brickHeight = 50;
let offset = 50;

drawBricks();

function drawBricks() {
    context.fillStyle = 'darkred';

    for(let j = 0; j < 6; j++) {
        for(let i = 0; i < 6; i++) {
            console.log(j % 2);
            context.fillRect(50 + ((brickWidth + margin) * i) + (j % 2 * offset), 50 + ((brickHeight + margin) * j), brickWidth, brickHeight);
        }
    }
    
}