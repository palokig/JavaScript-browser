'use strict'


function clicklist(event) {

    if ( event.target.className == "add-to-cart") {
        let item = {price: event.target.dataset.price,title: event.target.dataset.title};

        addToCart(item);
    };

}
list.addEventListener('click',clicklist);
