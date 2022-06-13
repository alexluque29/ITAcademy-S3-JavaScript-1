"use strict";
// Se convierte el array products[] en un archivo .js.

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
let contador = document.getElementById("count_product").innerHTML;

// Exercise 1
//Se comenta esta función debido a la refactorización.

/*function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let contador, i;  
  for (i = 0; i < products.length; i++) {
        if (products[i].id == id) {
        cartList.push(products[i]);
        contador = cartList.length;
        document.getElementById("count_product").innerHTML = contador;
    }
}
}*/
// Exercise 2
function cleanCart() {
  cartList = [];
  cart = [];
  contador = 0;
  document.getElementById("count_product").innerHTML = contador;
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  
  let i, total = 0;

  for (i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// Exercise 4
//Se comenta esta función debido a la refactorización.

/*function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart=[];
  let i, checkProduct;
  for (i = 0; i < cartList.length; i++) {
    checkProduct = cartList[i];

    if (!cart.includes(checkProduct)) {
      checkProduct.quantity = 1;
      cart.push(checkProduct);
    } 
    else if (cart.includes(checkProduct)) {
      checkProduct.quantity++;
    }
  }
}*/

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  
  let i, checkItem;

  for (i = 0; i < cart.length; i++) {
    checkItem = cart[i];
    if (checkItem.id == 1 && checkItem.quantity >= 3) {
      checkItem.price = 10;
      checkItem.subtotalWithDiscount = (
        checkItem.quantity * checkItem.price
      ).toFixed(2);
    } else if (checkItem.id == 1 && checkItem.quantity < 3) {
      checkItem.price = 10.5;
      checkItem.subtotalWithDiscount = (
        checkItem.quantity * checkItem.price
      ).toFixed(2);
    }
    if (checkItem.id == 3 && checkItem.quantity >= 10) {
      checkItem.price = 3.33;
      checkItem.subtotalWithDiscount = (
        checkItem.quantity * checkItem.price
      ).toFixed(2);
    } else if (checkItem.id == 3 && checkItem.quantity < 10) {
      checkItem.price = 5;
      checkItem.subtotalWithDiscount = (
        checkItem.quantity * checkItem.price
      ).toFixed(2);
    }
    if (checkItem.id != 1 || checkItem.id != 3) {
      checkItem.subtotalWithDiscount = (
        checkItem.quantity * checkItem.price
      ).toFixed(2);
    }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  document.getElementById("cart_list").innerHTML = "";
  applyPromotionsCart();
  let total = calculateTotal();

  for (let items of cart) {
    document.getElementById("cart_list").innerHTML += `
        <tr>
        <th scope="row">${items.name}</th>
        <td>${items.price}</td>
        <td>${items.quantity}</td>
        <td>$${items.subtotalWithDiscount}</td>
        <td><button type="button" onclick="removeFromCart(${items.id})" class="btn btn-danger bt-sm">Remove</button></td>
        </tr>`;
  }
  document.getElementById("total_price").innerHTML = total.toFixed(2);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  let i, checkProduct;
  cartList = [];

  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      cartList.push(products[i]);
      contador++;
      document.getElementById("count_product").innerHTML = contador;
    }
  }

  for (i = 0; i < cartList.length; i++) {
    checkProduct = cartList[i];

    if (!cart.includes(checkProduct)) {
      checkProduct.quantity = 1;
      cart.push(checkProduct);
    } else if (cart.includes(checkProduct)) {
      checkProduct.quantity++;
    }
  }
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  
  let i, checkProduct;

  for (i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      checkProduct = cart[i];

      if (checkProduct.quantity > 1) {
        checkProduct.quantity--;
        contador--;
        document.getElementById("count_product").innerHTML = contador;
      } else if (checkProduct.quantity == 1) {
        checkProduct.quantity = 0;
        cart.splice(i, 1);
        contador--;
        document.getElementById("count_product").innerHTML = contador;
      }
    }
  }
  printCart();
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
