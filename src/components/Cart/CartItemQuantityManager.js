import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Buttons";

function CartItemQuantityManager() {
    const { item, setItem } = useState({ productId: "", quantity: "" });

    return (
        <form>
            <label htmlFor="" className="text-end">
                Quantité
            </label>
            <div className="d-flex flex-row flex-nowrap">
                <Button onClick={() => setItem()} variant="" text="-"></Button>
                <Input value={item} onChange={setItem} type="number" />
                <Button onClick={() => setItem()} variant="" text="+"></Button>
            </div>
        </form>
    );
}

export default CartItemQuantityManager;
