'use strict';
const xhrAuthentication = new XMLHttpRequest();
const xhrRegistration = new XMLHttpRequest();

function userAuthentication() {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', document.querySelector('.sign-in-htm #email').value);
    formData.append('pass', document.querySelector('.sign-in-htm #pass').value);

    xhrAuthentication.addEventListener("load", onLoad);
    xhrAuthentication.addEventListener("error", onError);
    xhrAuthentication.open("POST",
        "https://neto-api.herokuapp.com/signin",
        true);
    xhrAuthentication.send(formData);
}
function onLoad(){
    if (xhrAuthentication.status !== 200) {
        console.log (`Ответ ${xhrAuthentication.status}: ${xhrAuthentication.statusText}`);
    }
    else {
        var data = JSON.parse(xhrAuthentication.responseText);

        if (data.error == true) {
            document.querySelector('.sign-in-htm .error-message').value = data.message;
        }else {
            document.querySelector('.sign-in-htm .error-message').value = `Пользователь ${data.name} успешно авторизован`;

        }
        console.log(data);
    }
}

function onError() {
    console.log("Сработало событие error");
}

function onLoadAuthentication(){

    if (xhrAuthentication.status !== 200) {
        console.log (`Ответ ${xhrAuthentication.status}: ${xhrAuthentication.statusText}`);
    }
    else {
        var data = JSON.parse(xhrAuthentication.responseText);

        if (data.error == true) {
            document.querySelector('.sign-up-htm .error-message').value = data.message;
        } else {
            document.querySelector('.sign-up-htm .error-message').value = `Пользователь ${data.name} успешно зарегистрирован`;

        }
        console.log(data);
    }
}

function userRegistration(){
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', document.querySelector('.sign-up-htm #email2').value);
    formData.append('password', document.querySelector('.sign-up-htm #password').value);
    formData.append('passwordcopy', document.querySelector('.sign-up-htm #passwordcopy').value);
    formData.append('name', document.querySelector('.sign-up-htm #name').value);

    xhrRegistration.addEventListener("load", onLoadAuthentication);
    xhrRegistration.addEventListener("error", onError);
    xhrRegistration.open("POST",
        "https://neto-api.herokuapp.com/signup",
        true);
    xhrRegistration.send(formData);
}

document.querySelector('.sign-in-htm .button').addEventListener('click',userAuthentication);
document.querySelector('.sign-up-htm .button').addEventListener('click',userRegistration);