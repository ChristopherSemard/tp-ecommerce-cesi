import React from "react";
import { useEffect, useState } from "react";
import Button from "../Button/Buttons";
import {
    addToCart,
    updateProduct,
    deleteProduct,
} from "../../services/Cart/Cart";

function AddToCart({ product, setShow }) {
    const [item, setItem] = useState({ id: "", quantity: 1 });

    useEffect(() => {
        setItem((current) => {
            return { ...current, id: product.id };
        });
    }, []);

    return (
        <>
            <Button
                onClick={() => {
                    addToCart(item);
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
