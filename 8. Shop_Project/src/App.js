import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import {ProductForm} from "./components/product-form/ProductForm";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]); 

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    // <Routes>
    //   <Route path="/admin/products/add" element={<ProductForm/>}></Route>
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
    // {/* </Routes> */}
  );
};

export default App;
