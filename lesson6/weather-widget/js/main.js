const request = new XMLHttpRequest();
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather', true);
request.addEventListener("load",onLoad);
request.addEventListener("error", onError);
request.send();
function onLoad() {
    if (request.status !== 200) {
        console.log (`Ответ  ${request.status}: ${xhr.statusText}`);
    }
    else  {
        const response = JSON.parse(request.responseText);
        setData(response);
    }
}

function onError() {
    console.log("ошибка");
}