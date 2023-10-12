import React from "react";
import { Col, Card } from "react-bootstrap";
import Button from "../Button/Buttons";

import "../../styles/Product/Product.css";

function Product({ product, displayModal }) {
    const handleClick = () => {};
    return (
        <Col md={6} xl={3}>
            <Card className="product-item ">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>
                        {product.title.length > 50
                            ? product.title.slice(0, 50) + " ..."
                            : product.title}
                    </Card.Title>
                    <Card.Text>
                        {product.description.slice(0, 60)} ...
                    </Card.Text>
                    <Button
                        onClick={() => displayModal(product.id)}
                        variant="primary"
                        text="Voir détails"
                    ></Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Product;
