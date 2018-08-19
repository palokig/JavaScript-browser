'use strict';

function showcolor() {
    localStorage.colorChecked =event.target.value;
}

function showSize() {
    localStorage.sizeChecked =event.target.value;
}


var colorData;
var xhr1 = new XMLHttpRequest();
xhr1.addEventListener("load",()=> {
    colorData = JSON.parse(xhr1.responseText);

    //добавим цвета
    var result = colorData.forEach(function(item) {
        var colorAvailability;
        var colorDisabled = '';
        if (item.isAvailable == true) {
            colorAvailability = 'available';
        } else {
            colorAvailability = 'soldout';
            colorDisabled = 'disabled';
        }
        var textcolors =`<div data-value="${item.code}" class="swatch-element color ${item.code} ${colorAvailability}">`+
            `<div class="tooltip">${item.title}</div>`+
            `<input quickbeam="color" id="swatch-1-${item.code}" type="radio" name="color" value="${item.code}" checked ${colorDisabled}>`+
            `<label for="swatch-1-${item.code}" style="border-color: ${item.code};">`+
            `<span style="background-color: ${item.code};"></span>`+
            `<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">`+
            `</label>`+
            `</div>`;
        document.getElementById('colorSwatch').innerHTML =  document.getElementById('colorSwatch').innerHTML+textcolors;

    });

    // получим цвет
    if (!localStorage.colorChecked == false) {
        document.querySelector('input[value=' + localStorage.colorChecked + ']').checked = true;
    }

    // изменяем цвет
    Array.from(document.querySelectorAll('input[name="color"]')).forEach(function(item) {
        item.addEventListener('input', showcolor);
    });
});

xhr1.addEventListener("error", ()=>{console.log("Сработало событие error");})
xhr1.open("GET",
    "https://neto-api.herokuapp.com/cart/colors",
    true);
xhr1.send();



var sizesData;
var xhr2 = new XMLHttpRequest();
xhr2.addEventListener("load",()=>{
    sizesData = JSON.parse(xhr2.responseText);

    // получим размеры
    var result = sizesData.forEach(function(item) {
        var sizesAvailability;
        var sizesDisabled = '';
        if (item.isAvailable == true) {
            sizesAvailability = 'available';
        } else {
            sizesAvailability = 'soldout';
            sizesDisabled = 'disabled';
        }
        var textSize = `<div data-value="${item.type}" class="swatch-element plain ${item.type} ${sizesAvailability}">` +
            `<input id="swatch-0-${item.type}" type="radio" name="size" value="${item.type}" ${sizesDisabled}>` +
            `<label for="swatch-0-${item.type}">` +
            `${item.title}` +
            `<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">` +
            ` </label>` +
            `</div>`;
        document.getElementById('sizeSwatch').innerHTML =  document.getElementById('sizeSwatch').innerHTML+textSize;
    });

    // получим размер
    if (!localStorage.sizeChecked == false) {
        document.querySelector('input[value=' + localStorage.sizeChecked + ']').checked = true;
    }

    // изменяем размер
    Array.from(document.querySelectorAll('input[name="size"]')).forEach(function(item) {
        item.addEventListener('input', showSize);
    });
});
xhr2.addEventListener("error", ()=>{console.log("Сработало событие error");})
xhr2.open("GET",
    "https://neto-api.herokuapp.com/cart/sizes",
    true);
xhr2.send();

function establishTextCart(cartData) {

    var quickCartPrice = 0;
    var result = cartData.forEach(function (item) {
        if (!document.getElementById(`quick-cart-product-count-${item.id}`) == true ) {
            var textcart = `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${item.id}" style="opacity: 1;">
                            <div class="quick-cart-product-wrap">
                            <img src="${item.pic}" title="${item.title}">
                            <span class="${item.size}" style="background-color: #000; opacity: .5">$${item.price}</span>
                            </div>
                            <span class="count hide fadeUp" id="quick-cart-product-count-${item.id}">${item.quantity}</span>
                             <span class="quick-cart-product-remove remove" data-id="${item.id}"></span>
                            </div>`;
        document.getElementById('quick-cart').innerHTML = document.getElementById('quick-cart').innerHTML + textcart;
        }
        quickCartPrice = quickCartPrice + (item.price * item.quantity);
    });

    document.getElementById('quick-cart').innerHTML = document.getElementById('quick-cart').innerHTML + `<a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open">
                                                            <span>
                                                            <strong class="quick-cart-text">Оформить заказ<br></strong>
                                                            <span id="quick-cart-price">$${quickCartPrice}</span>
                                                            </span>
                                                            </a>`;


}

function getCartData() {
    var cartData;
    var xhr3 = new XMLHttpRequest();
    xhr3.addEventListener("load", () => {
        cartData = JSON.parse(xhr3.responseText);
        establishTextCart(cartData);
        if (!document.querySelector('.quick-cart-product') == false) {
            document.querySelector('.quick-cart-product').addEventListener('click', delProduct);
        }
    });
    xhr3.addEventListener("error", () => {
        console.log("Сработало событие error");
    })
    xhr3.open("GET",
        "https://neto-api.herokuapp.com/cart",
        true);
    xhr3.send();
}

getCartData();

function delProduct(event) {

     if (event.target.classList.contains('remove')){

         var productId = document.getElementById('AddToCartForm').dataset.productId;
         event.preventDefault();
         const formData = new FormData();
         formData.append('productId', event.target.dataset.id);
         formData.append('quantity', 1);

         const xhr = new XMLHttpRequest() ;
         xhr.addEventListener("load",onLoadDelProduct);
         xhr.addEventListener("error", onError);
         xhr.open("POST",
             "https://neto-api.herokuapp.com/cart/remove",
             true);

         xhr.send(formData);

         function onLoadDelProduct(){

             if (xhr.status !== 200) {
                 console.log (`Ответ ${xhr.status}: ${xhr.statusText}`);
             }
             else {
                 var data = JSON.parse(xhr.responseText);
                 //console.log(data);
                 if (data.length == 0) {
                     document.getElementById(`quick-cart-product-${productId}`).innerHTML='';
                     
                 } else {
                     const foundElement = data.find(function (el) {
                         return el.id = "2721888517";
                     });
                     //console.log(foundElement);
                     document.getElementById(`quick-cart-product-count-${productId}`).innerText = foundElement.quantity;
                 }
                 establishTextCart(data);
                 document.querySelector('.quick-cart-product').addEventListener('click', delProduct);
             }
         }

         function onError() {
             console.log("Сработало событие error");
         }

     }
}

function addProduct(){

    event.preventDefault();
    const formData = new FormData();
    var productId = document.getElementById('AddToCartForm').dataset.productId;
    formData.append('productId', productId);
    formData.append('quantity', 1);

    const xhr = new XMLHttpRequest() ;
    xhr.addEventListener("load",onLoadAddProduct);
    xhr.addEventListener("error", onErrorAddProduct);
    xhr.open("POST",
        "https://neto-api.herokuapp.com/cart",
        true);

    xhr.send(formData);
    function onLoadAddProduct(){

        if (xhr.status !== 200) {
            console.log (`Ответ ${xhr.status}: ${xhr.statusText}`);
        }
        else {
            var data = JSON.parse(xhr.responseText);
            //console.log(data);
            if (!document.getElementById(`quick-cart-product-count-${productId}`) == true ){
                establishTextCart(data);
                document.querySelector('.quick-cart-product').addEventListener('click', delProduct);
            } else {
                const foundElement = data.find(function (el) { return el.id ="2721888517"; });
                //console.log(foundElement);
                document.getElementById(`quick-cart-product-count-${productId}`).innerText = foundElement.quantity;
            }
            establishTextCart(data);
            document.querySelector('.quick-cart-product').addEventListener('click', delProduct);
        }}

    function onErrorAddProduct() {
        console.log("Сработало событие error");
    }



}



document.getElementById('AddToCartText').addEventListener('click',addProduct);

