document.querySelector('.zip input').addEventListener('keydown',showZip);

function showZip() {
    if (event.key  === 'Enter' || event.key === 'Delete' || event.key === 'Backspace') {
        return;
    }
    if (event.key < '0' || event.key > '9') {
        event.preventDefault();
    }
}

var contentformInput = document.querySelectorAll('.contentform input');

for (let i = 0; i < contentformInput.length; i++) {
    contentformInput[i].addEventListener('change',checkForVoid)
}
document.querySelector('.contentform textarea').addEventListener('change',checkForVoid);

function checkForVoid() {
    const contentformInputArray = Array.from(contentformInput)
    const foundElement = contentformInputArray.find(function (el) { return el.value ===""; });
    if (foundElement === undefined & !document.querySelector('.contentform textarea').value === false){
        document.getElementsByClassName('button-contact')[0].disabled = false;
    }else {
        document.getElementsByClassName('button-contact')[0].disabled = true;
    }

}

function sendData(){
    event.preventDefault();
    document.getElementsByClassName('contentform')[0].classList.add('hidden');
    document.getElementById('output').classList.remove('hidden');
    for (let i = 0; i < contentformInput.length; i++) {
        if (contentformInput[i].name === 'email' || contentformInput[i].name === 'phone') {
            continue;
        }
        document.getElementById(contentformInput[i].name).value = contentformInput[i].value ;
    }
    document.getElementById('message').value = document.querySelector('.contentform textarea').value;
}

function sendDataEnd(){
    event.preventDefault();
    document.getElementsByClassName('contentform')[0].classList.remove('hidden');
    document.getElementById('output').classList.add('hidden');

}

document.getElementsByClassName('button-contact')[0].addEventListener('click', sendData);
document.getElementsByClassName('button-contact')[1].addEventListener('click', sendDataEnd);

