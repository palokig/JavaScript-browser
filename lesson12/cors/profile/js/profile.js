'use strict';
function showHtml(technologies) {
    return `<span class="devicons devicons-${technologies}"></span>`;
}
function showTechnologies(data) {

    document.querySelector('.badgescard').innerHTML = data.reduce(function(textHtml, technologies) {
        return textHtml +showHtml(technologies);
    }, '');

}
function showMe(data) {

    document.querySelector('h1[data-name]').textContent =  data.name;
    document.querySelector('p[data-description]').textContent =  data.description;
    document.querySelector('img[data-pic]').src =  data.pic;
    document.querySelector('h3[data-position]').textContent =  data.position;

    loadData(`https://neto-api.herokuapp.com/profile/${data.id}/technologies`).then(showTechnologies);
    document.querySelector('.content').style.display = 'initial';

}

function randName() {

    var rand = 100 - 0.5 + Math.random() * (999 - 100 + 1);
    rand = Math.round(rand);
    return 'callback'+rand;
}

function loadData(url) {
    const functionName = randName();
    return new Promise((done, fail) => {
        window[functionName] = done;
        var script = document.createElement('script');
        script.src = `${url}?callback=${functionName}`;
        document.body.appendChild(script);
    });
}

loadData('https://neto-api.herokuapp.com/profile/me').then(showMe);

