import React from "react";

import { Context } from "../Context/Context";
import { useContext } from "react";
import { getCartWithInfos } from "../../services/Cart/Cart";
import { Container } from "react-bootstrap";
import CartProduct from "./CartProduct";

function Cart() {
    const [context] = useContext(Context);
    const cartWithInfos = getCartWithInfos(context.cart.cart);

    return (
        <Container className="d-flex flex-column align-items-center">
            <h1 className="my-4 w-100">Votre panier</h1>
            {cartWithInfos.length > 0 ? (
                cartWithInfos.map((item) => (
                    <CartProduct item={item} key={item.id} />
                ))
            ) : (
                <div className="alert alert-warning">
                    Aucun produit dans le panier
                </div>
            )}

            <p>
                Total du panier : <b>{context.cart.totalAmount}€</b>
            </p>
        </Container>
    );
}

export default Cart;
