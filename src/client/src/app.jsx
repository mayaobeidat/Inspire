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
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;