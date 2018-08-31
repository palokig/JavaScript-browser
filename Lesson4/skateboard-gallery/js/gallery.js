var galleryNavElements = document.getElementsByClassName('gallery-nav');

var aElements = galleryNavElements[0].getElementsByTagName('a');

var galleryView = document.getElementsByClassName('gallery-view')[0];

function showGallery() {
    event.preventDefault();
    galleryView.src = event.currentTarget.href;
    for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove('gallery-current');
    }
    event.currentTarget.classList.add('gallery-current');
}

for (let i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener('click',showGallery);
}