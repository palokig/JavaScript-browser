'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');

connection.addEventListener('open', () => {
    document.querySelector('h2.chat-status').innerHTML = document.querySelector('h2.chat-status').dataset.online;
    document.querySelector('button.message-submit').disabled = false;
    document.querySelector('.message-status .message-text').innerHTML = 'Пользователь появился в сети';
    //console.log('Вебсокет-соединение открыто');
});

function getCurrentTime() {
    var currentTime = new Date()
    return ''+currentTime.getHours() + ':' + currentTime.getMinutes();
}

connection.addEventListener('message', event => {
    if (event.data == '...') {

    } else  {

        var textMessage = `<div class="message">
            <figure class="avatar"><img src="./i/profile-80.jpg" /></figure>
            <span class="message-text">${event.data}</span>
            <div class="timestamp">`+getCurrentTime()+`</div>
        </div>`;

        document.getElementsByClassName('messages-content')[0].innerHTML = document.getElementsByClassName('messages-content')[0].innerHTML + textMessage;
    }
});

function messageSend() {
    event.preventDefault();
    var messageInput = document.querySelector('input.message-input').value;
    connection.send(messageInput);

    var textMessage = `<div class="message message-personal">
        <span class="message-text">${messageInput}</span>
        <div class="timestamp">`+getCurrentTime()+`</div>
    </div>`

    document.getElementsByClassName('messages-content')[0].innerHTML = document.getElementsByClassName('messages-content')[0].innerHTML + textMessage;

}

document.querySelector('button.message-submit').addEventListener('click',messageSend)