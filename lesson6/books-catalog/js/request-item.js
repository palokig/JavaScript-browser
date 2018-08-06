var xhr = new XMLHttpRequest();
var contentElements = document.getElementById('content');
xhr.addEventListener("load",onLoad);
xhr.addEventListener("error", onError);
xhr.open("GET",
    "https://neto-api.herokuapp.com/book/",
    true);
xhr.send();

function onLoad(){
    if (xhr.status !== 200) {
        console.log (`Ответ ${xhr.status}: ${xhr.statusText}`);
    }
    else {
        var items = JSON.parse(xhr.responseText);
        var itemsText ='';
        for(const item of items){
            itemsText = itemsText + `<li data-title="${item.title}" data-author="${item.author.name}" data-info="${item.info}" data-price="${item.price}"> <img src="${item.cover.small}"></li>`
        }
        contentElements.innerHTML = itemsText;
    }
}
function onError() {
    console.log("Сработало событие error");
}
