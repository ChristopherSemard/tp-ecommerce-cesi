import { productList } from "../../datas/products";

export function addToCart(newProduct) {
    let actualCart = getCart();

    const alreadyIn = actualCart.find(
        (product) => product.id === newProduct.id
    );

    if (alreadyIn) {
        updateProduct(newProduct, "increment");
    } else {
        actualCart.push(newProduct);
        saveCart(actualCart);
    }
    let cartContext = getCartContext();
    return cartContext;
}

export function getCartContext() {
    let cart = getCart();
    let cartContext = {
        cart,
        numberOfDifferentProducts: cart.length,
        totalNumberOfProducts: getCountOfProducts(cart),
        totalAmount: getTotalAmount(getCartWithInfos()),
    };
    return cartContext;
}
export function getTotalAmount(cartWithInfos) {
    let totalAmount = 0;
    for (const item of cartWithInfos) {
        totalAmount = totalAmount + item.quantity * item.product.price;
    }

    return totalAmount;
}
export function getCountOfProducts(cart) {
    let totalNumberOfProducts = 0;
    for (const item of cart) {
        totalNumberOfProducts = totalNumberOfProducts + item.quantity;
    }

    return totalNumberOfProducts;
}

export function getCart() {
    let actualCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    return actualCart;
}

export function deleteProduct(id) {
    let actualCart = getCart();
    const newCart = actualCart.filter((product) => product.id !== id);
    saveCart(newCart);
    let cartContext = getCartContext();
    return cartContext;
}

export function updateProduct(productToUpdate, increment = null) {
    let actualCart = getCart();

    const alreadyIn = actualCart.find(
        (product) => product.id === productToUpdate.productId
    );
    if (increment != null) {
        alreadyIn.quantity = alreadyIn.quantity + 1;
    } else {
        alreadyIn.quantity = productToUpdate.quantity;
    }
    saveCart(actualCart);
    let cartContext = getCartContext();
    return cartContext;
}

export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartWithInfos() {
    let cart = getCart();
    let cartWithInfos = [];
    for (const item of cart) {
        let itemWithInfos = {
            id: item.id,
            quantity: item.quantity,
            product: getProduct(item.id),
        };
        cartWithInfos.push(itemWithInfos);
    }
    return cartWithInfos;
}

function getProduct(id) {
    let product = productList.find((product) => product.id === id);
    if (product) {
        return product;
    } else {
        return null;
    }
}
