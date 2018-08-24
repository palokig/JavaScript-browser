'use strict';

function showTwitter(data) {
    //console.log(data);

    document.querySelector('img.bg').src = data.wallpaper;
    document.querySelector('h3[data-username]').textContent =  data.username;
    document.querySelector('p[data-description]').textContent =  data.description;
    document.querySelector('img[data-pic]').src  =  data.wallpaper;
    document.querySelector('output[data-tweets]').value =  data.tweets;
    document.querySelector('output[data-followers]').value =  data.followers;
    document.querySelector('output[data-following]').value =  data.following;
    //document.querySelector('h3[data-username]').innerText
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

loadData('https://neto-api.herokuapp.com/twitter/jsonp').then(showTwitter);
