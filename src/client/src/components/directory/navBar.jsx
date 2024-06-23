import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { clearToken } from "../../api/sliceAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
 
export default function NavBar() {
 const token = useSelector((state) => state.auth.token);
 const cartItems = useSelector((state) => state.cart.items);
 const dispatch = useDispatch();
 const navigate = useNavigate();


 const handleLogout = () => {
   dispatch(clearToken());
   navigate("/login");
 };


 const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

 return (
  <nav className="navBar">
    <ul className="navBarL">
      <li>
        <NavLink className="nlH" to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nlB" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className="nlB" to="/">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">
          <FontAwesomeIcon icon={faHeart} className='wishlist-icon'/>
        </NavLink>
      </li>
      <li className="navBarR">
         <NavLink to="/cart" className="cart-link">
           <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
           {totalItemsInCart > 0 && (
             <span className="cart-count">{totalItemsInCart}</span>
           )}
         </NavLink>
       </li>
      {token ? (
        <>
        <li className="navBarR">
          <NavLink to="/auth/me" className="account-link">
            <FontAwesomeIcon icon={faUser} className="account-icon" />
          </NavLink>
        </li>
          <li>
            <button className="nlL" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink className="nlR" to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className="nlL" to="/login">
              Log In
            </NavLink>
            </li>
         </>
       )}
     </ul>
   </nav>
 );
}

