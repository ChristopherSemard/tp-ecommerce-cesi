import React from "react";
import { Container } from "react-bootstrap";

import ProductList from "../Product/ProductList";

function Home() {
    return (
        <>
            <Container>
                <ProductList />
            </Container>
        </>
    );
}

export default Home;
