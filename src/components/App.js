import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import { Context } from "./Context/Context";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {
    const existingCart = null;

    const [context, setContext] = useState({
        cart: existingCart ? JSON.parse(existingCart) : [],
    });
    return (
        <main className="App">
            <Context.Provider value={[context, setContext]}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        {/* <Route path="/cart" element={<Cart />}></Route> */}
                        <Route render={() => <h1>404</h1>}></Route>
                    </Routes>
                    {/* <Footer /> */}
                </Router>
            </Context.Provider>
        </main>
    );
}

export default App;
