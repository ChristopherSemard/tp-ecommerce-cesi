import React, { useState, useEffect } from "react";

import Product from "./Product";
import { productList } from "../../datas/products";

import { Row, Modal } from "react-bootstrap";
import Button from "../Button/Buttons";
import CartItemQuantityManager from "../Cart/CartItemQuantityManager";
import AddToCart from "../Cart/AddToCart";

function ProductList() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const displayModal = (id) => {
        let product = getProductById(id);
        setSelectedProduct(product);
        console.log(product);
        setShow(true);
    };
    const getProductById = (id) => {
        let productFound = productList.find((product) => {
            return product.id === id;
        });
        return productFound;
    };

    useEffect(() => {}, [selectedProduct]);

    return (
        <>
            <Row className="product-list" gy={4}>
                {productList.map((product, index) => (
                    <Product
                        product={product}
                        id={index}
                        key={index}
                        displayModal={displayModal}
                    />
                ))}
            </Row>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    {selectedProduct ? (
                        <Modal.Title>{selectedProduct.title}</Modal.Title>
                    ) : null}
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct ? (
                        <div className=" row">
                            <div className="col-4 d-flex align-items-center justify-content-center ">
                                <img
                                    className="product-image"
                                    src={selectedProduct.thumbnail}
                                    alt=""
                                />
                            </div>
                            <div className="col-8 d-flex flex-column justify-content-between">
                                <div>
                                    <p>{selectedProduct.description}</p>
                                    <p className="product-price">
                                        {selectedProduct.price} €
                                    </p>
                                </div>
                                <div className="d-flex align-items-center justify-content-end">
                                    <AddToCart
                                        product={selectedProduct}
                                        setShow={setShow}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProductList;
