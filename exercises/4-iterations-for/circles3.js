"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width=context.canvas.width;
let height=context.canvas.height;

drawdecreadingcircles ();

//i are for the coords of the circles, j the size
// 10 horizontal, 8 vertical
//y stays the same 10 times, x changes every time, size stays the same 10 times

function drawdecreadingcircles () {
    for (let i=0; i<11; i++) {
        for (let j=-1; j<10; j++) {
            context.fillStyle=Utils.hsla(195, 100, 50, 0.3);
            Utils.fillcircle (i*(width/9), j*(height/7), (j+1)*11);
            console.log(i);
            console.log(j);
        }
    }
}