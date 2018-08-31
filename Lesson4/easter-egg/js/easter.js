function showKey() {
    if (!event.altKey & !event.altCtrl) {
        return
    }
    switch (event.code)  {
        case 'KeyT':
            var nav = document.getElementsByTagName('nav')[0];
            nav.classList.toggle('visible');
            break;
    }

}

document.addEventListener('keydown',showKey);

var secretCode = [];
var secretCodeCorrect = ['KeyY','KeyT','KeyN','KeyJ','KeyK','KeyJ','KeyU','KeyB','KeyZ'];
var secretElements = document.getElementsByClassName('secret')[0];

function showSecretCode(){
    if (secretCodeCorrect[secretCode.length] == event.code) {
        secretCode.push(event.code);
        console.log(secretCode);
    }
    else {
        secretCode = [];
        console.log(secretCode);
    }

  if (secretCode.length  >= secretCodeCorrect.length ) {
    if (secretCode.toString() === secretCodeCorrect.toString()) {
      secretElements.classList.toggle('visible');
    }
  }
}
document.addEventListener('keydown',showSecretCode);