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

var secretCode = '';
var secretCodeCorrect = 'нетология';
var secretElements = document.getElementsByClassName('secret')[0];

function showSecretCode(){

    let eventCode = event.code;
    if (event.code === 'KeyY') {
        eventCode = 'н'
    }
    if (event.code === 'KeyT') {
        eventCode = 'е'
    }
    if (event.code === 'KeyN') {
        eventCode = 'т'
    }
    if (event.code === 'KeyJ') {
        eventCode = 'о'
    }
    if (event.code === 'KeyK') {
        eventCode = 'л'
    }
    if (event.code === 'KeyU') {
        eventCode = 'г'
    }
    if (event.code === 'KeyB') {
        eventCode = 'и'
    }
    if (event.code === 'KeyZ') {
        eventCode = 'я'
    }

    secretCode = secretCode + eventCode;
  if (secretCode.length  >= secretCodeCorrect.length ) {
    if (secretCode === secretCodeCorrect) {
      secretElements.classList.toggle('visible');
    }
    else {
        SecretCode = '';
    }
  }
}
document.addEventListener('keydown',showSecretCode);