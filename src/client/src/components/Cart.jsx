import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../api/cartSlice';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.cartItemId}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <button className="remove-button" onClick={() => handleRemove(item.cartItemId)}>Remove</button> {/* Apply remove-button class */}
            </li>
          ))}
        </ul>
      )}
      <button className="cart-button" onClick={handleContinueShopping}>Continue Shopping</button> {/* Apply cart-button class */}
    </div>
  );
};

export default Cart;
