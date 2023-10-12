import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Buttons";

import {
    addToCart,
    updateProduct,
    deleteProduct,
} from "../../services/Cart/Cart";

function CartItemQuantityManager({ product }) {
    const [item, setItem] = useState({ productId: "", quantity: "0" });
    const [productQuantity, setProductQuantity] = useState(1);
    // const [productId, setProductId] = useState(0);

    const addToCart = () => {};

    useEffect(() => {
        setItem((current) => {
            return { ...current, productId: product.id };
        });
    }, []);

    useEffect(() => {
        setItem((current) => {
            return { ...current, quantity: productQuantity };
        });
    }, [productQuantity]);

    return (
        <form>
            <div className="d-flex flex-row flex-nowrap align-items-center justify-content-end">
                <label htmlFor="" className="text-end me-2">
                    Quantité
                </label>
                <Button
                    onClick={() =>
                        setProductQuantity(
                            productQuantity - 1 > 0 ? productQuantity - 1 : 1
                        )
                    }
                    variant="primary"
                    text="-"
                ></Button>
                <Input
                    value={productQuantity}
                    onChange={setProductQuantity}
                    type="number"
                />
                <Button
                    onClick={() => setProductQuantity(productQuantity + 1)}
                    variant="primary"
                    text="+"
                    size="sm"
                ></Button>
            </div>
        </form>
    );
}

export default CartItemQuantityManager;
