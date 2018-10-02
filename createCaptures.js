'use strict';
const fs = require('fs');
const path = require('path');
const av = require('tessel-av');
const camera = new av.Camera();
const capture = camera.capture();
const ifColorMatches = require('./colorTest')

//flag here that would dictate whether the setTimeout function is running
//if there is a color match, then pause; resume in two instances:
    //if the faucet is turned on, then resume when it's turned off + additional time
    //if faucet is not turned on, then resume after yelling

setTimeout(function(){
    capture();
}, 5000)

capture.on('data', function(data) {
    fs.writeFile(path.join(__dirname, './redCup.jpg'), data);
    ifColorMatches()
  });

