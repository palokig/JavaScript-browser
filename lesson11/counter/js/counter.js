'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');
connection.addEventListener('message', event => {
    var message = JSON.parse(event.data);
    document.querySelector('.counter').innerHTML = message.connections;
    document.querySelector('output.errors').innerHTML = message.errors;
    //console.log(`Получено сообщение: ${event.data}`);
});

connection.addEventListener('error', error => {
    console.log(`Произошла ошибка: ${error.data}`);
});

window.onunload = function() {
    connection.close();
};

connection.addEventListener('close', event => {
    console.log('Вебсокет-соединение закрыто');
});