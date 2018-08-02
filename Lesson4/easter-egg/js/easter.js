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