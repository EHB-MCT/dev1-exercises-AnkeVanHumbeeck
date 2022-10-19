"use strict";

/**  @type{CanvasRenderingContext2D} */
let context;

setupCanvas();

export default context;

 function setupCanvas() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d"); 
 }