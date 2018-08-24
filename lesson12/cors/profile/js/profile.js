'use strict';


function showTwitter(data) {
    console.log(data);
    document.querySelector('h1[data-name]').textContent =  data.name;

    document.querySelector('.content').style.display = 'initial';

}

function loadData(url) {
    const functionName = 'callback12';
    return new Promise((done, fail) => {
        window[functionName] = done;
        var script = document.createElement('script');
        script.src = `${url}?callback=${functionName}`;
        document.body.appendChild(script);
    });
}

loadData('https://neto-api.herokuapp.com/profile/me').then(showTwitter);
