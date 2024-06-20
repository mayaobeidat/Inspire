import React from 'react';

const AccountPage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Cityville',
    username: 'shsdfrjg',
    orders: [
      { id: 1, date: '2024-06-10', total: 55.0 },
      { id: 2, date: '2024-06-15', total: 78.5 },
    ],
  };

  return (
    <div className="account-page">
      <h1>Welcome, {user.name}!</h1>

      <section className="account-details">
        <h2>Account Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Username:</strong> {user.username}</p>
      </section>

      <section className="order-history">
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
      </section>
    </div>
  );
};

export default AccountPage;
