
var soundsMiddle = [
    'sounds/middle/fifth.mp3',
    'sounds/middle/first.mp3',
    'sounds/middle/fourth.mp3',
    'sounds/middle/second.mp3',
    'sounds/middle/third.mp3'];

var soundsLower = [
    'sounds/lower/fifth.mp3',
    'sounds/lower/first.mp3',
    'sounds/lower/fourth.mp3',
    'sounds/lower/second.mp3',
    'sounds/lower/third.mp3'];

var soundsHigher = [
    'sounds/higher/fifth.mp3',
    'sounds/higher/first.mp3',
    'sounds/higher/fourth.mp3',
    'sounds/higher/second.mp3',
    'sounds/higher/third.mp3'];

var soundSet = soundsMiddle;

var setElements = document.getElementsByClassName('set');

var setElementsLi = document.getElementsByTagName('li');

for (let i = 0; i < setElementsLi.length; i++) {
    setElementsLi[i].addEventListener('click',()=> {
        let audioElements = event.currentTarget.getElementsByTagName('audio')[0];
        audioElements.src = soundSet[i];
        audioElements.play();
    } );
}

function showKey() {


    if (event.altKey & !event.repeat) {
        setElements[0].classList.remove('lower');
        setElements[0].classList.remove('middle');
        setElements[0].classList.remove('higher');
        soundSet = soundsHigher;
        setElements[0].classList.add('higher');
    }
    if (event.shiftKey & !event.repeat) {
        setElements[0].classList.remove('lower');
        setElements[0].classList.remove('middle');
        setElements[0].classList.remove('higher');
        soundSet = soundsLower;
        setElements[0].classList.add('lower');
    }

}

function showKeyUp() {

    if (!event.altKey || !event.shiftKey) {
        setElements[0].classList.remove('lower');
        setElements[0].classList.remove('middle');
        setElements[0].classList.remove('higher');
        soundSet = soundsMiddle;
        setElements[0].classList.add('middle');
    }
}
document.addEventListener('keydown',showKey);
document.addEventListener('keyup',showKeyUp);
//document.addEventListener('shiftKey',showKey);
//classList.toggle('active');