"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//let horizintalLines=10;
//let verticalLines=10;
let width= context.canvas.width;
let height= context.canvas.height;
let margin= height/10;

drawCircles ();

function drawCircles () {
    for (let i=0; i<21; i+=2) {
        for (let j=0; j<21; j+=2) {
            context.fillStyle="lightblue";
            Utils.fillcircle (i*(width/20), j*(height/10.5), width/20, height/16);
            console.log(i);
            console.log(j);
        }
    }
}
