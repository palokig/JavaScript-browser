'use strict';

function createElement(block) {
    console.log(block)

    if ((block === undefined) || (block === null) || (block === false)) {
        return document.createTextNode('');
    }
    if ((typeof block === 'string') || (typeof block === 'number') || (block === true)) {
        return document.createTextNode(block);
    }
    if (Array.isArray(block.childs)) {
        return block.childs.reduce(function(f, item) {
            f.appendChild(createElement(item));

            return f;
        }, document.createDocumentFragment());
    }

    const element = document.createElement(block.name || 'div');

    element.classList.add(...[].concat(block.props || []));

    if (block.attrs) {
        Object.keys(block.attrs).forEach(key => {
            element.setAttribute(key, block.attrs[key]);
        });
    }

    if (block.content) {
        element.appendChild(createElement(block.content));
    }

    return element;

}
