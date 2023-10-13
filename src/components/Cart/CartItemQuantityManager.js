import React, { useEffect, useState, useContext } from "react";
import Input from "../Input/Input";
import Button from "../Button/Buttons";

import { updateProduct, deleteProduct } from "../../services/Cart/Cart";
import { Context } from "../Context/Context";

function CartItemQuantityManager({ item }) {
    const [productQuantity, setProductQuantity] = useState(item.quantity);
    const [, setContext] = useContext(Context);

    useEffect(() => {
        let cartContext = updateProduct({
            productId: item.id,
            quantity: productQuantity,
        });
        setContext((current) => {
            return { ...current, cart: cartContext };
        });
    }, [productQuantity]);

    const deleteItem = (id) => {
        let cartContext = deleteProduct(id);
        setContext((current) => {
            return { ...current, cart: cartContext };
        });
    };

    return (
        <form className="d-flex flex-row flex-nowrap align-items-center justify-content-end">
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
            <Button
                onClick={() => deleteItem(item.id)}
                variant="danger"
                text="x"
                size="sm"
            ></Button>
        </form>
    );
}

export default CartItemQuantityManager;
