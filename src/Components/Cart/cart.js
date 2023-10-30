export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

export function getCart() {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        return [];
    } else {
        return JSON.parse(cart)
    }
}

export function addCart(product) {
    let cart = getCart();
    let foundProduct = cart.find(p => p.id == product.id)
    if (foundProduct != undefined) {
        foundProduct.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    cart.push(product);
    saveCart(cart);

}

export function removeFromCart(product) {
    let cart = getCart();
    cart = cart.filter(p => p.id != product.id);
    saveCart(cart);
}

export function changeQuantity(product, quantity) {
    let cart = getCart()
    let foundProduct = cart.find(p => p.id == product.id)
    if (foundProduct == undefined) {
        return
    }
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
        removeFromCart(cart);
    }else{
        saveCart(cart);
    }
}

export function getNumberProduct(){
    let cart = getCart();
    let number = 0;
    for(let product of cart){
        number += product.quantity
    }
    return number
}

export function getTotalPrice(){
    let cart = getCart()
    let total = 0;
    for (let product of cart){
        total += product.quantity + product.price
    }
    return total
}