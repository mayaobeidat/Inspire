import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noSearchResults, setNoSearchResults] = useState(false);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch("http://localhost:8080/api/products", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllProducts();
  }, []);

  useEffect(() => {
    const searchResultArray = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(searchResultArray);
    setNoSearchResults(searchResultArray.length === 0);
  }, [value, products]);

  const setResults = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="contentWrapper">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for a product..."
          onChange={setResults}
        />
      </div>
      {noSearchResults && <h2>No products match search</h2>}
      {filteredProducts.map((product) => (
        <div className="productWrapper" key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="buttonWrapper">
            <Link className="link" to={"product/" + product.id}>
              <button className="border_button">See info</button>
            </Link>
            {/* <Checkout product={product.id} /> {} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;