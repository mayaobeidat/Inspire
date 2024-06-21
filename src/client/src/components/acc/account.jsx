import React from 'react';

// Assuming you have a token stored in localStorage or sessionStorage
const token = localStorage.getItem('token'); // Retrieve token from storage

// Function to fetch account information
const fetchAccountInfo = async () => {
  try {
    const response = await fetch('https://localhost:5173/auth/login', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Send token in Authorization header
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch account information');
    }

    const accountData = await response.json();
    console.log('Account Information:', accountData);
    return accountData; // Return account data for further processing
  } catch (error) {
    console.error('Error fetching account information:', error.message);
    // Handle error gracefully (e.g., show error message to user)
    return null;
  }
};

// Example usage
fetchAccountInfo();


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
