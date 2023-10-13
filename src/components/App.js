import React from "react";
import "../styles/App.css";
import { Context } from "./Context/Context";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getCartContext } from "../services/Cart/Cart";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";

function App() {
    const cartContext = getCartContext();

    const [context, setContext] = useState({
        cart: cartContext,
    });
    return (
        <main className="App">
            <Context.Provider value={[context, setContext]}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route render={() => <h1>404</h1>}></Route>
                    </Routes>
                    {/* <Footer /> */}
                </Router>
            </Context.Provider>
        </main>
    );
}

export default App;
