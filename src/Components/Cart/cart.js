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
    saveCart(cart);

}

export function removeFromCart(product) {
    console.log("remove");
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
        removeFromCart(product);
    } else {
        saveCart(cart);
    }
}

export function getNumberProduct() {
    let cart = getCart();
    let number = 0;
    for (let product of cart) {
        number += product.quantity
    }
    return number
}

export function getTotalPrice() {
    let cart = getCart()
    let total = 0;
    for (let product of cart) {
        total += product.quantity * product.price
    }
    return total
}

export function addProductToCart(id, image, price,quantity = 1) {
    let cart = getCart();
    let foundProduct = cart.find(product => product.id === id);

    if(quantity > 1){
        if (foundProduct){
            foundProduct.quantity += quantity;
        }
        else {
            cart.push({ id, image, price, quantity: 1 });
        }
        saveCart(cart);
        
        return
    }

    if (foundProduct) {
        foundProduct.quantity += 1;
    } else {
        cart.push({ id, image, price, quantity: 1 });
    }

    saveCart(cart);
}