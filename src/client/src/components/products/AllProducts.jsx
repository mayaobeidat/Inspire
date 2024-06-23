import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../api/wishlistSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ product, onAddToWishlist }) {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    alert(`${product.name} has been added to your wishlist!`);
  };

  return (
    <div className="productWrapper" key={product.id}>
      <ul className="product-list">
        <Link className="link" to={`/product/${product.id}`}>
          <div className="card-image-container">
            <img className="cardCoverImg" src={product.image} alt={product.name} />
          </div>
        </Link>
        <h4 className="cardName">{product.name}</h4>
        <p className="cardDesigner">{product.designer}</p>
        <p className="cardPrice">${product.price}</p>
        <div className="buttonWrapper">
          <Link className="link" to={`/product/${product.id}`}>
            <button className="border_button">See info</button>
          </Link>
          <button 
            className="wishlist_button"
            onClick={handleAddToWishlist}>
            <FontAwesomeIcon icon={faHeart} className='wishlist_button'/>
          </button>
        </div>
      </ul>
    </div>
  );
}


function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);
  const [noSearchResults, setNoSearchResults] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllProducts() {
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
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.designer.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredProducts(results);
    setNoSearchResults(results.length === 0);
  }, [searchValue, products]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
            value={searchValue}
            onChange={handleSearchChange}
          />
        </ul>
      </div>
      <div className="product-list-wrapper">
        {error && <h2>{error}</h2>}
        {noSearchResults && !error && <h2>No products match your search</h2>}
        {currentProducts.map((product) => (
          <ProductCard 
            product={product} 
            key={product.id} 
          />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="pagination">
        {filteredProducts.length > productsPerPage && (
          <ul className="pagination-buttons">
            {currentPage > 1 && (
              <ul className="page-item">
                <button onClick={() => paginate(currentPage - 1)} className="page-link">
                  <span className="previous">&#8249;</span>
                </button>
              </ul>
            )}
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
              <ul key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </ul>
            ))}
            {currentPage < Math.ceil(filteredProducts.length / productsPerPage) && (
              <ul className="page-item">
                <button onClick={() => paginate(currentPage + 1)} className="page-link">
                  <span className="next">&#8250;</span>
                </button>
              </ul>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
