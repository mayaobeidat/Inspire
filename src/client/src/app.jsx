import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./api/sliceAuth";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./components/products/AllProducts";
import SingleProduct from "./components/products/SingleProduct";
import Login from "./components/acc/Login";
import Register from "./components/acc/Register";
import Home from "./components/directory/home";
import NavBar from "./components/directory/navBar";
import Account from "./components/acc/account";
import Cart from "./components/Cart"; 
import Blogs from "./components/blogs/blogs";
import "./index.css";

function App() {
  const [userToken, setUserToken] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      dispatch(setToken(token));
      setUserToken(token);
    }
  }, [dispatch]);

  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/auth/me" element={<Account token= {userToken} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
