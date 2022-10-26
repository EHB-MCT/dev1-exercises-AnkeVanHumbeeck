"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width =600;
let height =300;

let horizontallines=60;
let verticallines=30;



drawLines();

function drawLines(){
    context.fillStyle="orange";
    context.fillRect(0, 0, 600, 300);

    for(let i=0; i<60 ; i++) {
        context.strokeStyle="white";
        context.lineWidth=2;
        Utils.drawLine (10*i, 0, width-10*i, height);
    }
    for(let i=0; i<31; i++) {
        Utils.drawLine (0, 10*i, width, height-10*i);
    }
}
