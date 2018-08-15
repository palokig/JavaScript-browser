tabsContentSelectorChildren = document.querySelector('.tabs-content').children;
var copySample = document.querySelector('.tabs-nav li');

function processingTabs(item) {
    item.classList.add('hidden');
    console.log(item.dataset.tabTitle);
    console.log(item.dataset.tabIcon);
    newCopySample = copySample.cloneNode(true);
    newCopySample.children[0].innerText = item.dataset.tabTitle;
    newCopySample.children[0].classList.add('item.dataset.tabIcon');

    document.querySelector('.tabs-nav').appendChild(newCopySample);

}

Array.from(tabsContentSelectorChildren).forEach(item => processingTabs(item));

copySample.parentNode.removeChild(copySample);
document.querySelector('.tabs-nav li').classList.add('ui-tabs-active');
tabsContentSelectorChildren[0].classList.remove('hidden');


