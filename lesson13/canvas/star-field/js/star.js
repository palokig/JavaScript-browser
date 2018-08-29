'use strict';
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

function randomInteger(min, max,labelFloor = true ) {
    var rand = min + Math.random() * (max + 1 - min);
    if (labelFloor ) {
        rand = Math.floor(rand);
    }
    return rand;
}

function starEl(starColorsStyle,randomX,randomY, randomR, randomGlobalAlpha) {

    ctx.beginPath();
    ctx.arc(randomX,randomY,randomR,0,Math.PI*2);
    ctx.globalAlpha = randomGlobalAlpha;
    ctx.fillStyle = starColorsStyle;
    ctx.strokeStyle = starColorsStyle;
    ctx.fill();
    ctx.stroke();
}

function randomStar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const starColors = ['#ffffff', 'ffe9c4', 'd4fbff'];
    const numberStars = randomInteger(200, 400);

    for (let i = 0; i < numberStars; i++) {
        starEl(starColors[randomInteger(0, 2)], randomInteger(0, 800), randomInteger(0, 400), randomInteger(0, 1.1, false),randomInteger(0.8, 1, false));
    }
}

randomStar();

canvas.onclick = randomStar;