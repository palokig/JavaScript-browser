var xhr = new XMLHttpRequest();
var data =[];

xhr.addEventListener("load",onLoad);
xhr.addEventListener("error", onError);

xhr.open("GET",
    "https://neto-api.herokuapp.com/currency",
    true);
xhr.send();

function onLoad(){
    if (xhr.status !== 200) {
        console.log (`Ответ ${xhr.status}: ${xhr.statusText}`);
    }
    else {
        data = JSON.parse(xhr.responseText);
        //console.log(data);
        data.forEach(function(item, i, data) {
            document.getElementById('from').innerHTML = document.getElementById('from').innerHTML + `<option value="${item.code}">${item.title}</option>`;
            document.getElementById('to').innerHTML = document.getElementById('to').innerHTML + `<option value="${item.code}">${item.title}</option>`;
        });

        document.getElementById('content').classList.remove('hidden');
        showCalculationCurrency();
    }
}

function onError() {
    console.log("Сработало событие error");
}

function showCalculationCurrency(){
    const fromCurrency = Number(data.find(function (el) { return el.code == document.getElementById('from').value; }).value);
    const toCurrency = Number(data.find(function (el) { return el.code == document.getElementById('to').value; }).value);
    document.getElementById('result').value = (Number((document.getElementById('source').value)*fromCurrency)/toCurrency).toFixed(2);
}

document.getElementById('source').addEventListener('input', showCalculationCurrency);
document.getElementById('from').addEventListener('change', showCalculationCurrency);
document.getElementById('to').addEventListener('change', showCalculationCurrency);