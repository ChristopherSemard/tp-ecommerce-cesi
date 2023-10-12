export function addToCart(newProduct) {
    let actualCart = getCart();

    // console.log(newProduct.id);
    // console.log(newProduct.id === actualCart[0].id);
    const alreadyIn = actualCart.find(
        (product) => product.id === newProduct.id
    );

    if (alreadyIn) {
        console.log("1");
        actualCart = updateProduct(newProduct, "increment");
    } else {
        actualCart.push(newProduct);
        saveCart(actualCart);
    }
    // console.log(newCart);
    return actualCart;
}

export function getCart() {
    let actualCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    return actualCart;
}

export function deleteProduct(productToDelete) {
    let actualCart = getCart();
    const newCart = actualCart.filter(
        (product) => product.id !== productToDelete.id
    );
    saveCart(newCart);
    return newCart;
}

export function updateProduct(productToUpdate, increment = null) {
    let actualCart = getCart();

    const alreadyIn = actualCart.find(
        (product) => product.id === productToUpdate.id
    );
    if (increment) {
        alreadyIn.quantity = alreadyIn.quantity + 1;
    } else {
        alreadyIn.quantity = 1;
    }
    saveCart(actualCart);
    return actualCart;
}

export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartWithInfos() {
    let cart = getCart();
}
