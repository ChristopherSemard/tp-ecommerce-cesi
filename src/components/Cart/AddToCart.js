import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Button from "../Button/Buttons";
import { addToCart } from "../../services/Cart/Cart";
import { Context } from "../Context/Context";

function AddToCart({ product, setShow }) {
    const [item, setItem] = useState({ id: "", quantity: 1 });
    const [, setContext] = useContext(Context);

    useEffect(() => {
        setItem((current) => {
            return { ...current, id: product.id };
        });
    }, []);

    return (
        <>
            <Button
                onClick={() => {
                    setContext((current) => {
                        return { ...current, cart: addToCart(item) };
                    });

                    setShow(false);
                }}
                variant="success"
                text="Ajouter au panier"
                size="sm"
                className="me-2"
            ></Button>
        </>
    );
}

export default AddToCart;
