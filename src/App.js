import React, { useReducer } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";

import { CartContext, initialState } from "./context/cartContext";
import { cartReducer } from "./context/cartContext";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/cart" exact>
        <Layout>
          <Cart />
        </Layout>
      </Route>
    </CartContext.Provider>
  );
}

export default App;
