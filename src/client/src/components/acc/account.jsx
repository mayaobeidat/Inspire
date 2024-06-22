import React, { useEffect, useState } from 'react';

const token = localStorage.getItem('token');

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
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
        setUser(accountData);
      } catch (error) {
        console.error('Error fetching account information:', error);
      }
    };
    fetchAccountInfo();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchOrderHistory = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/users/${user.id}/orders`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          });
    
          if (!response.ok) {
            throw new Error('Failed to fetch order history');
          }
    
          const ordersData = await response.json();
          console.log('Order History:', ordersData);
          setOrders(ordersData);
        } catch (error) {
          console.error('Error fetching order history:', error);
        }
      };
      fetchOrderHistory();
    }
  }, [user]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="account-page">
      {user && orders ? 
        <div className='accountWrapper'>
          <h1 className='welcome'>Welcome, {user.name}!</h1>

          <section className="account-details">
            <h2>Account Details</h2>
            <ul className='accountDetailsWrapper'>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Username:</strong> {user.username}</p>
            </ul>
          </section>

          <section className="order-history">
            <h2>Order History</h2>
            {orders?.length > 0 ? (
              <ul className='contentOrder'>
                {orders.map(order => {
                  const orderTotal = order.products.reduce((total, product) => 
                    total + (product.price * product.quantity), 0);
                  return (
                    <ul className='orderHistory' key={order.id}>
                      <h4>Order No. {order.order_id}</h4>
                      <h4>Date: {formatDate(order.date_time_purchased)}</h4>
                      <h3>Order Items:</h3> 
                      {order.products.map(product => (
                        <div className='orderItemsWrapper'>
                          <ul className='orderHistoryProducts' key={product.id}>
                            <div className='orderHistoryT'>
                              <h4>{product.name}</h4>
                              <p>${product.price}</p>
                              <p>Quantity: {product.quantity}</p>
                            </div>
                            <div className='orderHPContent'>
                              <img className="orderProductImage" src={product.image} alt={product.name} />
                            </div>
                          </ul>
                        </div>
                      ))}
                      <div className="cart-total">
                        <h4>Total: ${orderTotal.toFixed(2)}</h4>
                      </div>
                    </ul>
                  );
                })}
              </ul>
            ) : (
              <p>No orders yet.</p>
            )}
          </section>
        </div>
      : <p>Loading...</p>}
    </div>
  );
};

export default AccountPage;
