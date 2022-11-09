"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width=context.canvas.width;
let height=context.canvas.height;

context.fillRect(0,0,width,height);
context.fillStyle="black";

for(let i=0; i<100000; i++) {
    let x= Math.random()*width;
    if (x<width/2) {
        context.fillStyle="red";
    }else{
        context.fillStyle="green";
    }
    Utils.fillCircle (x, Math.random()*height, 2);
}

