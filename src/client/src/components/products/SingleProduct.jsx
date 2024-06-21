import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../api/cartSlice"; 
import Snackbar from '@mui/material/Snackbar';

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

  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
              <div className="qntySingle">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  className="qnty"
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                />
              </div>
              <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
              <Snackbar
                open={open}
                autoHideDuration={1500}
                onClose={handleClose}
                message="Added to cart!"
              />
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
