"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawBrickWall ();

let width=context.canvas.width;
let height =context.canvas.height;


function drawBrickWall () {
    let margin = 50;
    context.fillStyle="#8b0000";
    for (let i=0; i<660; i+=110) {
        for (let j=1; j<4; j++) {
        context.fillRect(50+i, 2.2*j*margin-55, 100, 50);
        context.fillRect(100+i, 2*j*margin+j*10, 100, 50);  
        }
    }
}