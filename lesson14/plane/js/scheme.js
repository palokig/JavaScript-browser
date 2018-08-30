'use strict'

function showPlanes(list) {
    document.querySelector('#seatMapDiv').appendChild(createElementHtml(list.map(templateHtmlObject)));
}


/*
    tag: 'тег',
    cls: 'класс',
    attrs: 'атрибут',
    content: 'контент'
*/
function templateHtmlObject(comment) {
    return {

    }

}

function createElementHtml(block) {
    if ((block === undefined) || (block === null) || (block === false)) {
        return document.createTextNode('');
    }
    if ((typeof block === 'string') || (typeof block === 'number') || (block === true)) {
        return document.createTextNode(block);
    }
    if (Array.isArray(block)) {
        return block.reduce(function(f, item) {
            f.appendChild(createElementHtml(item));

            return f;
        }, document.createDocumentFragment());
    }

    const element = document.createElement(block.tag || 'div');

    element.classList.add(...[].concat(block.cls || []));

    if (block.attrs) {
        Object.keys(block.attrs).forEach(key => {
            element.setAttribute(key, block.attrs[key]);
        });
    }

    if (block.content) {
        element.appendChild(createElementHtml(block.content));
    }

    return element;
}


fetch('https://neto-api.herokuapp.com/plane/a319')
    .then(res => res.json())
    .then(showPlanes);