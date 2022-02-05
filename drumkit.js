"use strict";
let keys = document.getElementsByClassName("keys");

// instrument audio objects //
const clap = new Audio("sounds/clap.wav");
const hihat = new Audio("sounds/hihat.wav");
const kick = new Audio("sounds/kick.wav");
const openhat = new Audio("sounds/openhat.wav");
const boom = new Audio("sounds/boom.wav");
const ride = new Audio("sounds/ride.wav");
const snare = new Audio("sounds/snare.wav");
const tom = new Audio("sounds/tom.wav");
const tink = new Audio("sounds/tink.wav");

// Audio functions
const playClap = (e) => {
        if(e.code == "KeyA"){
                clap.pause();
                clap.play();
                return;
        }
};

const playHihat = (e) => {
        if(e.code == "KeyS"){
                hihat.pause();
                hihat.play();
                return;
        }
};

const playKick = (e) => {
        if(e.code == "KeyD"){
                kick.pause();
                kick.play();
                return;
        }
};

const playOpenhat = (e) => {
        if(e.code == "KeyF"){
                openhat.pause();
                openhat.play();
                return;
        }
};

const playBoom = (e) => {
        if(e.code == "KeyG"){
                boom.pause();
                boom.play();
                return;
        }
};

const playRide = (e) => {
        if(e.code == "KeyH"){
                ride.pause();
                ride.play();
                return;
        }
};

const playSnare = (e) => {
        if(e.code == "KeyJ"){
                snare.pause();
                snare.play();
                return;
        }
};

const playTom = (e) => {
        if(e.code == "KeyK"){
                tom.pause();
                tom.play();
                return;
        }
};
const playTink = (e) => {
        if(e.code == "KeyL"){
                tink.pause();
                tink.play();
                return;
        }
};
