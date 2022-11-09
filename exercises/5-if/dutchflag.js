"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width=context.canvas.width;
let height=context.canvas.height;

context.fillRect(0,0,width,height);
context.fillStyle="black";

for(let i=0; i<100000; i++) {
    let y= Math.random()*height;
    if (y<height) {
        context.fillStyle="blue";
    }if (y<2*height/3){
        context.fillStyle="white";
    }if (y<height/3) {
        context.fillStyle="red";
    }
    Utils.fillCircle (Math.random()*width, y, 2);
}
