import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../api/wishlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div className='contentWrapper'>
      <div className="wishlistWrapper">
        <h1>My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="wishlist-list">
            {wishlist.map((item) => (
              <ul key={item.id} className='productWrapper'>
                <div className='wishlist-item'>
                  <div className='wishCoverImg'>
                    <img className='wishImg' src={item.image} alt={`${item.name} by ${item.designer}`} />
                  </div>
                  <button 
                    className="wishlist_button"
                    onClick={() => handleRemoveFromWishlist(item)}>
                    <FontAwesomeIcon icon={faHeart} className='wishlist_button_icon' />
                  </button>
                  <div className='wishText'>
                    <h5>{item.name}</h5>
                    <p>{item.designer}</p>
                    <p>${item.price}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
