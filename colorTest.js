const getAllColors = require('./getColors')

'use strict';
const fs = require('fs');
const path = require('path');
const av = require('tessel-av');
const camera = new av.Camera();
const capture = camera.capture();

const ifColorMatches = async function() {
    const verify = await getAllColors()
    if(verify) {
        //listen for faucet for 10 seconds
            //if water is turned on, pause and resume once turned off
        //invoke the yelling functions
            //stop yelling and take a photo of the culprit
            //slack out the photo 
            //continue taking photos
    } else {
        //continue taking photos
    }
}

export default ifColorMatches
