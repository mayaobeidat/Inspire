import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="productWrapper" key={product.id}>
      <ul className="product-list">
        <div className="card-image-container">
          <img className="cardCoverImg" src={product.image} alt={product.name} />
        </div>
        <h1 className="cardName">{product.name}</h1>
        <p className="cardDesigner">{product.designer}</p>
        <p className="cardPrice">${product.price}</p>
        <div className="buttonWrapper">
          <Link className="link" to={`/product/${product.id}`}>
            <button className="border_button">See info</button>
          </Link>
        </div>
      </ul>
    </div>
  );
}

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noSearchResults, setNoSearchResults] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch("http://localhost:8080/api/products", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllProducts();
  }, []);

  useEffect(() => {
    const searchResultArray = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.designer.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(searchResultArray);
    setNoSearchResults(searchResultArray.length === 0);
  }, [value, products]);

  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="contentWrapper">
      <div className="search-bar-container">
        <ul className="searchBar">
          <h1>Shop Inspired</h1>
          <input
            type="text"
            className="sBar"
            placeholder="Search for a product..."
            onChange={handleSearchChange}
          />
        </ul>
      </div>
      <div className="product-list-wrapper">
        {error && <h2>{error}</h2>}
        {noSearchResults && !error && <h2>No products match search</h2>}
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;



