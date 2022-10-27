"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width= context.canvas.width;
let height= context.canvas.height;

drawCirclesRandom ();

function drawCirclesRandom() {
    for (let i=0; i<100; i++){
       for (let j=0; j<4; j++){
            Utils.fillcircle(Math.random()*width, Math.random()*height, Math.random()*i);
            context.fillStyle= Utils.hsla(195,100,50,0.3);
        }
    }
}