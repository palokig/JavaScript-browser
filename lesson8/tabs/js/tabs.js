tabsContentSelectorChildren = document.querySelector('.tabs-content').children;
var copySample = document.querySelector('.tabs-nav li');

function activateHidden(item) {
    item.classList.add('hidden');
    Array.from(document.querySelectorAll('.tabs-nav li')).forEach(item => {item.classList.remove('ui-tabs-active')});
}

function processingTabs(item) {

    newCopySample = copySample.cloneNode(true);
    newCopySample.children[0].innerText = item.dataset.tabTitle;
    newCopySample.children[0].classList.add(item.dataset.tabIcon);

    newCopySample.addEventListener('click',()=>{
        Array.from(tabsContentSelectorChildren).forEach(item => activateHidden(item));
        item.classList.remove('hidden');
        Array.from(document.querySelectorAll('.tabs-nav li')).forEach(item => {item.classList.remove('ui-tabs-active')});
        event.currentTarget.classList.add('ui-tabs-active');

    });

    document.querySelector('.tabs-nav').appendChild(newCopySample);

}

Array.from(tabsContentSelectorChildren).forEach(item => activateHidden(item));
Array.from(tabsContentSelectorChildren).forEach(item => processingTabs(item));

copySample.parentNode.removeChild(copySample);
document.querySelector('.tabs-nav li').classList.add('ui-tabs-active');
tabsContentSelectorChildren[0].classList.remove('hidden');


