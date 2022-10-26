"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width=context.canvas.width-400;
let height =context.canvas.height-400;


drawBubbles ();

function drawBubbles() {
    context.fillStyle="black";
    context.fillRect(0, 0, width+400, height+400);
    for(let i=0; i<100; i++) {
    Utils.fillcircle(Math.random()*width+200, Math.random()*height+200, Math.random()*i);
    let h= Math.random()*180;
    let s= 100;
    let l= 50;
    let a= 0.5;
    let color= "hsla(" + h + "," + s + "%," + l + "%,"+ a +")";
    context.fillStyle = color;  
    console.log(i);
    }
   
}

