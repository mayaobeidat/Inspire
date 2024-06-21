import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../api/cartSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {items.map((item) => (
            <li key={item.cartItemId} className="cart-item">
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button
                  className="view-button"
                  onClick={() => handleViewProduct(item.id)}
                >
                  View Product
                </button>
              </div>
              <button className="remove-button" onClick={() => handleRemove(item.cartItemId)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="cart-button" onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default Cart;
