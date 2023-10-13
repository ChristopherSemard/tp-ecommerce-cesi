import React from "react";

import "../../styles/Cart/CartProduct.css";
import CartItemQuantityManager from "./CartItemQuantityManager";

function CartProduct({ item }) {
    return (
        <div className="cart-item d-flex flex-nowrap justify-content-between gap-4">
            <img src={item.product.thumbnail} alt="" />

            <div className="w-100">
                <h3 className="fs-5">{item.product.title}</h3>
                <CartItemQuantityManager
                    className="quantity-container"
                    item={item}
                />
            </div>
        </div>
    );
}

export default CartProduct;
