const audioElements = document.getElementsByTagName('audio');
const player = audioElements[0];
const currentNameAudio = document.getElementsByClassName('title')[0];

const audioArr = [
        {src:"mp3/la-chill-Tour.mp3",title:"LA Chill Tour"},
        {src:"mp3/la-fusion-jam.mp3",title:"This is it band"},
        {src:"mp3/this-is-it-band.mp3",title:"LA Fusion Jam"}
    ];

var currentAudio = 1;
player.src =audioArr[currentAudio-1].src;
currentNameAudio.title = audioArr[currentAudio-1].title;

function setClassPlay() {
    if (player.paused === true) {
        document.querySelector('.mediaplayer').classList.remove('play');
    }
    else {
        document.querySelector('.mediaplayer').classList.add('play');
    }
}

const btnPlay = document.getElementsByClassName('playstate')[0];
btnPlay.onclick = () => {
    if (player.paused === true) {
        player.play();
    }
    else {
        player.pause();
    }
    setClassPlay();
};

const btnStop = document.getElementsByClassName('stop')[0];
btnStop.onclick = () => {
    player.pause();
    player.currentTime = 0;
    setClassPlay();
};

const btnNext = document.getElementsByClassName('next')[0];
btnNext.onclick = () => {
    ++currentAudio;
    var playerPaused = player.paused;
    if (currentAudio > audioArr.length) {
        currentAudio = 1;
        player.src = audioArr[currentAudio - 1].src;
    }
    else {
        player.src = audioArr[currentAudio - 1].src;
    }

    if (playerPaused === false) {
        player.play();
    }
    else {
        player.pause();
    }

    currentNameAudio.title = audioArr[currentAudio-1].title;
    setClassPlay();
};

const btnBack = document.getElementsByClassName('back')[0];
btnBack.onclick = () => {
    --currentAudio;
    var playerPaused = player.paused;
    if (currentAudio == 0) {
        currentAudio = audioArr.length;
        player.src = audioArr[currentAudio - 1].src;
    }
    else {
        player.src = audioArr[currentAudio - 1].src;

    }

    if (playerPaused === false) {
        player.play();
    }
    else {
        player.pause();
    }

    currentNameAudio.title = audioArr[currentAudio-1].title;
    setClassPlay();
};

