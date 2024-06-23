// Wishlist.jsx
import React from 'react';
import { useSelector } from 'react-redux';

function Wishlist() {
  const wishlist = useSelector(state => state.wishlist.items);

  return (
    <div className='contentWrapper'>
      <div className="wishlistWrapper">
        <h1>My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="wishlist-list">
            {wishlist.map((item) => (
              <ul key={item.id} className="wishlist-item">
                <div className='wishCoverImg'>
                  <img className='wishImg' src={item.image} alt={item.name} />
                </div>
                <h2>{item.name}</h2>
                <p>{item.designer}</p>
                <p>${item.price}</p>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </div>

  );
}

export default Wishlist;
