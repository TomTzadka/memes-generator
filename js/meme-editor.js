'use strict'

let gElCanvas;
let gCtx;

function onInit() {
    
    gElCanvas = document.querySelector("canvas");
    gCtx = gElCanvas.getContext("2d");
  }