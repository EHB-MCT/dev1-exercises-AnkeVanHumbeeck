"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width=context.canvas.width;
let height=context.canvas.height;


context.fillRect(0,0,width,height);

drawMaze();

function drawMaze () {
    context.lineWidth=5;
    context.lineCap= "square";
    for(let j=0; j<500; j++){
        for (let i=0; i<500; i++) {
            context.strokeStyle=Utils.hsl((Math.random()*360), 100, 50);
            let r=(Math.round(Math.random()));
            if (r==0) {
                Utils.drawLine(10*i, 10*j, 10*i+10, 10*j+10);
            }else{
                Utils.drawLine(10*i, 10*j+10, 10*i+10, 10*j);
            }
        }
    }
    
}

