import React, { useEffect, useState } from 'react';

const token = localStorage.getItem('token');

const AccountPage = () => {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const fetchAccountInfo = async () => {
      try {
        const response = await fetch('http://localhost:8080/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch account information');
        }
    
        const accountData = await response.json();
        console.log('Account Information:', accountData);
        setUser(accountData)
      } catch (error) {
        console.error('Error fetching account information:', error);
        return null;
      }
    };
  fetchAccountInfo()
  },[]);

  return (
    <div className="account-page">
      {user ? 
      <div>
      <h1>Welcome, {user.name}!</h1>

      <section className="account-details">
        <h2>Account Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Username:</strong> {user.username}</p>
      </section>


      {/* <section className="order-history">
        <h2>Order History</h2>
        {user.orders.length > 0 ? (
          <ul>
            {user.orders.map(order => (
              <li key={order.id}>
                <strong>Order ID:</strong> {order.id}<br />
                <strong>Date:</strong> {order.date}<br />
                <strong>Total:</strong> ${order.total.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders yet.</p>
        )}
      </section> */}
      </div>
      :<p>Loading...</p>
      } 
    </div>
  );
};

export default AccountPage;
