'use strict';

function showComments(list) {
    //console.log(list.map(commentTemplate))
    document.querySelector('.comments').appendChild(createElementHtml(list.map(templateHtmlObject)));
}

function templateHtmlObject(comment) {
    return {
        tag: 'div',
        cls: 'comment-wrap',
        content: [
            {
              tag: 'div',
              cls: 'photo',
              attrs: {
                title: `${comment.author.name}`
              },
              content: {
                  tag: 'div',
                  cls: 'avatar',
                  attrs: {
                      style: `background-image: url(${comment.author.pic})`
                  },
              }
            },
            {
              tag: 'div',
                cls: 'comment-block',
                content: [{
                    tag: 'p',
                    cls: 'comment-text',
                    content: `${comment.text.split('\\n').join('<br>')}`
                },
                    {
                        tag: 'div',
                        cls: 'bottom-comment',
                        content: [{
                            tag: 'div',
                            cls: 'comment-date',
                            content: `${new Date(comment.date).toLocaleString('ru-Ru')}`
                        },
                            {
                                tag: 'ul',
                                cls: 'comment-actions',
                                content: [{
                                    tag: 'li',
                                    cls: 'complain',
                                    content: `Пожаловаться`
                                },
                                    {
                                        tag: 'li',
                                        cls: 'reply',
                                        content: `Ответить`
                                    }]

                            }
                        ]

                    }
                ]

            }
        ]
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

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);


