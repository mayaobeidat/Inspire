// function App() {
//     return (
//         <>hello world</>
//     );
// };
// export default App;


// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AllProducts from './components/products/allProducts';
// import SingleProduct from './components/products/singleProduct';

// function App () {
//   return (
//     <div>
//       <Routes>
//         <Route path="/api/products/:id" element={SingleProduct} />
//         <Route path="/api/products" element={AllProducts} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
// App.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./api/sliceAuth";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./components/products/allProducts";
import SingleProduct from "./components/products/singleProduct";
import Login from "./components/acc/Login";
import Register from "./components/acc/Register";
import NavBar from "./components/directory/navBar";
import Account from "./components/acc/account";
import "./index.css";

function App() {
  const [userToken, setUserToken] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token)
    if (token) {
      dispatch(setToken(token));
      setUserToken(token);
    }
  }, [dispatch]);

  return (
    <div className="main">
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="auth/login" element={<Login />}/>
        <Route path="/auth/register" element={<Register />}/>
        {/* <Route path="/home" element={<Home/>}/> */}
        <Route path="/account" element={Account}/>
      </Routes>
    </div>
  );
}

export default App;