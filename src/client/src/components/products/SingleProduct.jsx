import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../api/cartSlice"; // Import the addToCart action

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  // onClick={()=>alert("Added to Cart!")}
  return (
    <div className="singleProductWrapper">
      {product && (
        <>
          <ul className="single-product-wrapper">
            <div className="single-product-description">
              <h1>{product.name}</h1>
              <h2 className="sPdesigner">{product.designer}</h2>
              <ul className="sPdescription">{product.description}</ul>
              <p>${product.price}</p>
              <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button> {/* Apply cart-button class */}
              <button className="cart-button" onClick={handleGoToCart}>Go to Cart</button> {/* Apply cart-button class */}
              <NavLink to={"/"}><button className="backBtn">Back</button></NavLink>
            </div>
            <div className="single-image-container">
              <img className="single-image" src={product.image} alt={product.name} />
            </div>
          </ul>
        </>
      )}
    </div>
  );
}

export default SingleProduct;
