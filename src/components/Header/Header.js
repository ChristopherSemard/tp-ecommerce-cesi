import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Context } from "../Context/Context";

function Header() {
    const [context] = useContext(Context);

    useEffect(() => {}, [context]);
    console.log(context.totalNumberOfProducts);

    return (
        <Navbar expand="lg" className="bg-primary box-shadow z-3">
            <Container>
                <Navbar.Brand href="/">Accueil</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Link href="/">Accueil</Nav.Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                </Navbar.Collapse> */}

                <Nav.Link href="/cart" className="position-relative fs-5">
                    <i className="fa-solid fa-cart-shopping"></i> Panier
                    {context.cart.totalNumberOfProducts > 0 ? (
                        <div className="cart-number-items">
                            {context.cart.totalNumberOfProducts}
                        </div>
                    ) : null}
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default Header;
