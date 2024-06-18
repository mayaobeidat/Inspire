import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="productWrapper" key={product.id}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="buttonWrapper">
        <Link className="link" to={`/product/${product.id}`}>
          <button className="border_button">See info</button>
        </Link>
      </div>
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
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(searchResultArray);
    setNoSearchResults(searchResultArray.length === 0);
  }, [value, products]);

  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="contentWrapper">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for a product..."
          onChange={handleSearchChange}
        />
      </div>
      {error && <h2>{error}</h2>}
      {noSearchResults && !error && <h2>No products match search</h2>}
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default AllProducts;
