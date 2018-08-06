let currentTab;

let xhr = new XMLHttpRequest();
xhr.addEventListener("load",onLoadEmail);
xhr.addEventListener("error", onError);
xhr.addEventListener("loadstart", onLoadStart);
xhr.addEventListener("loadend", onLoadEnd);
xhr.open("GET",
    "/components/email-tab.html",
    true);
xhr.send();

function onLoadEmail() {
    currentTab = xhr.responseText;
    document.getElementById('content').innerHTML = xhr.responseText;
    //console.log(xhrEmail.responseText);
}

function onError() {
    console.log(`Сработало событие error ${xhr.status}`);
}
function onLoadStart() {
    document.getElementById('preloader').classList.remove('hidden');
}

function onLoadEnd() {
    document.getElementById('preloader').classList.add('hidden');

}

function switchingTabs() {
 event.preventDefault();
    xhr.open("GET",
        event.target.href,
        true);
    xhr.send();
    document.getElementsByClassName('active')[0].classList.remove('active');
    event.target.classList.toggle('active');

}

let aElements = document.querySelectorAll('nav > a');
for (const aElement of aElements) {
    aElement.addEventListener('click', switchingTabs);
}

