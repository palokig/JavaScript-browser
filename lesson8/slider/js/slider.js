const sliderNavSelector = document.querySelectorAll('.slider-nav  a');

document.querySelector('.slide').classList.add('slide-current');

function nextActionSlider() {
    slideCurrentSelector = document.querySelector('.slide-current');
    if (slideCurrentSelector.nextElementSibling == null){
    event.currentTarget.classList.add('disabled');
    Array.from(sliderNavSelector).forEach(item => {if ( item.dataset.action === 'last') {
        item.classList.add('disabled');
    }});
    } else {
    slideCurrentSelector.classList.remove('slide-current');
    slideCurrentSelector.nextElementSibling.classList.add('slide-current');
    }
}

function prevActionSlider() {
    slideCurrentSelector = document.querySelector('.slide-current');
    if (slideCurrentSelector.previousElementSibling == null){
        event.currentTarget.classList.add('disabled');
        Array.from(sliderNavSelector).forEach(item => {if ( item.dataset.action === 'first') {
            item.classList.add('disabled');
        }});
    } else {
        slideCurrentSelector.classList.remove('slide-current');
        slideCurrentSelector.previousElementSibling.classList.add('slide-current');
    }
}

function firstActionSlider() {
    slideCurrentSelector = document.querySelector('.slide-current');
    slideCurrentSelector.classList.remove('slide-current');
    document.querySelector('.slide').classList.add('slide-current');

}

function lastActionSlider() {
    slideCurrentSelector = document.querySelector('.slide-current');
    slideCurrentSelector.classList.remove('slide-current');
    let slideSelectorAll = document.querySelectorAll('.slide');
    slideSelectorAll[slideSelectorAll.length-1].classList.add('slide-current');
}

function slider(container){
    if (container.dataset.action === 'next') {
        container.addEventListener('click', nextActionSlider);
    } else if ( container.dataset.action === 'prev') {
        container.addEventListener('click', prevActionSlider);
    }
    else if ( container.dataset.action === 'first') {
        container.addEventListener('click', firstActionSlider);
    }
    else if ( container.dataset.action === 'last') {
        container.addEventListener('click', lastActionSlider);
    }
}
Array.from(sliderNavSelector).forEach(item => slider(item));