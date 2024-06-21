import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="productWrapper" key={product.id}>
      <ul className="product-list">
        <Link className="link" to={`/product/${product.id}`}>
          <div className="card-image-container">
            <img className="cardCoverImg" src={product.image} alt={product.name} />
          </div>
        </Link>
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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Products per page
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

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {currentProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="pagination">
        {filteredProducts.length > productsPerPage && (
          <ul className="pagination-buttons">
            { currentPage !== 1 
            ? 
              <ul className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button onClick={() => paginate(currentPage - 1)} className="page-link">
                  <a href="#" className="previous">&#8249;</a>
                </button>
              </ul>
            : <ul></ul>
            }
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
              <ul key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </ul>
            ))}
            {
              currentPage !== Math.ceil(filteredProducts.length / productsPerPage) 
              ?
              <ul className={`page-item ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'disabled' : ''}`}>
                <button onClick={() => paginate(currentPage + 1)} className="page-link">
                  <a href="#" className="next">&#8250;</a>
                </button>
              </ul>
            : <ul></ul>
            }
          </ul>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
