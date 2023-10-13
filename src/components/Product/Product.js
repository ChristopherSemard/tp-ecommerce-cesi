import React from "react";
import { Col, Card } from "react-bootstrap";
import Button from "../Button/Buttons";

import "../../styles/Product/Product.css";

function Product({ product, displayModal }) {
    const handleClick = () => {};
    return (
        <Col md={6} xl={3}>
            <Card className="product-item ">
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>
                        {product.title.length > 50
                            ? product.title.slice(0, 50) + " ..."
                            : product.title}
                    </Card.Title>
                    <Card.Text>
                        {product.description.slice(0, 50)} ...
                    </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-between px-3">
                    <p className="product-price mb-0">{product.price}€</p>
                    <Button
                        onClick={() => displayModal(product.id)}
                        variant="primary"
                        text="Voir détails"
                    ></Button>
                </div>
            </Card>
        </Col>
    );
}

export default Product;
