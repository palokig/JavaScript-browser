var addButton = document.getElementsByClassName('add');

function addCart(event) {
    console.log(event.srcElement.dataset.price);
    var price = event.srcElement.dataset.price;
    price =  Number.parseInt(price.replace(/\s+/g, ''));

    var cartCount = document.getElementById('cart-count').innerHTML;
    cartCount = Number.parseInt(cartCount.replace(/\s+/g, ''));

    var cartTotalHrice = document.getElementById('cart-total-price').innerHTML;
    cartTotalHrice = Number.parseInt(cartTotalHrice.replace(/\s+/g, ''));
    console.log(price )
    console.log(cartCount )
    console.log(cartTotalHrice )

    document.getElementById('cart-count').innerHTML = getPriceFormatted(++cartCount);
    document.getElementById('cart-total-price').innerHTML = getPriceFormatted(cartTotalHrice + price);

}

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click',addCart );
}