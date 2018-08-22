'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

showBubbles(connection);

document.getElementsByTagName('html')[0].addEventListener('click',()=>{
    var points = {x:event.clientX, y:event.clientY};
    connection.send(JSON.stringify(points));
});

connection.addEventListener('error', error => {
    console.log(`Произошла ошибка: ${error.data}`);
});

