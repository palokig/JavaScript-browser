'use strict';

function showFood(data) {
    console.log(data);
    document.querySelector('font[data-title]').textContent =  data.title;
    document.querySelector('div[data-pic]').style.background = `url(${data.pic})`;

    document.querySelector('td[data-ingredients]').textContent =  data.ingredients;

}

function showFoodRating(data) {
    console.log(data);
    document.querySelector('h1[data-rating]').textContent =  data.rating;
    let widthStar = (100/10)*data.rating;
    document.querySelector('em[data-star]').style.width =  `${widthStar}%`;
    document.querySelector('small[data-votes]').textContent =  data.votes;
}

function showHtml(users) {
    return `<img src="${users.pic}" title="${users.name}">`;
}

function showFoodConsumers(data) {
    console.log(data);
    document.querySelector('td[data-consumers]').innerHTML = data.consumers.reduce(function(textHtml, users) {
        return textHtml +showHtml(users);
    }, '');

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

loadData('https://neto-api.herokuapp.com/food/42').then(showFood);
loadData('https://neto-api.herokuapp.com/food/42/rating').then(showFoodRating);
loadData('https://neto-api.herokuapp.com/food/42/consumers').then(showFoodConsumers);