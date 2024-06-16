const pg = require("pg");
const bcrypt = require("bcrypt");

const client = new pg.Client("postgres://localhost/ecom_db");

// users
const getAllUsers = async () => {
  const response = await client.query(`SELECT * FROM users ORDER BY id ASC`);
  return response.rows;
};

const getUserById = async (id) => {
  const response = await client.query(`SELECT * FROM users WHERE id = $1`, [
    id,
  ]);
  return response.rows[0];
};

// const getUserByUsername = async (username) => {
//   const response = await client.query(`SELECT * FROM users WHERE username = $1`, [
//     username,
//   ]);
//   return response.rows[0];
// };

const deleteUser = async (id) => {
  await client.query(`DELETE FROM users WHERE id = $1`, [id]);
  return { id };
};

const createUser = async (user) => {
const { name, email, address, username, password } = user;
const response = await client.query(
  `INSERT INTO users (name, email, address, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
  [name, email, address, username, await bcrypt.hash(password, 5)]
);
return response.rows[0];
};

const updateUser = async (id, user) => {
const { name, email, address, username, password } = user;
const response = await client.query(
  `UPDATE users SET name = $1, email = $2, address = $3, username = $4, password = $5 WHERE id = $6 RETURNING *`,
  [name, email, address, username, password, id]
);
return response.rows[0];
};


// products
const getAllProducts = async () => {
  const response = await client.query(`SELECT * FROM products ORDER BY id ASC`);
  return response.rows;
};

const getProductById = async (id) => {
  const response = await client.query(`SELECT * FROM products WHERE id = $1`, [id]);
  return response.rows[0];
};

const deleteProduct = async (id) => {
    await client.query(`DELETE FROM products WHERE id = $1`, [id]);
    return { id };
};

const createProduct = async (product) => {
  const { name, price, description, category } = product;
  const response = await client.query(
    `INSERT INTO products (name, image, description, price, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, image, description, price, category]
  );
  return response.rows[0];
};

const updateProduct = async (id, product) => {
  const { name, image, description, price, category } = product;
  const response = await client.query(
    `UPDATE products SET name = $1, image = $2, description = $3, price = $4, category = $5 WHERE id = $6 RETURNING *`,
    [name, image, description, price, category, id]
  );
  return response.rows[0];
};

// order_products
const getAllOrder_Products = async () => {
    const response = await client.query(`SELECT * FROM order_products ORDER BY id ASC`);
    return response.rows;
};

const getOrder_ProductByOrderId = async (id) => {
    const response = await client.query(`SELECT * FROM order_products INNER JOIN products ON order_products.product_Id = products.id WHERE order_id = $1`, [id]);
    return response.rows;
};

const deleteOrder_Product = async (id) => {
    await client.query(`DELETE FROM order_products WHERE id = $1`, [id]);
    return { id };
};

const createOrder_Product = async (order_product) => {
    const { order_id, product_id, quantity } = order_product;
    const response = await client.query(
        `INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3 RETURNING *`,
        [order_id, product_id, quantity]
    );
    return response.rows[0];
};

const updateOrder_Product = async (id, order_product) => {
    const { order_id, product_id, quantity } = order_product;
    const response = await client.query(
        `UPDATE order_products SET order_id = $1, product_id = $2, quantity = $3 WHERE id = $4 RETURNING *`,
        [order_id, product_id, quantity, id]
    );
    return response.rows[0];
};
  

// orders
const getAllOrders = async () => {
  const response = await client.query(`SELECT * FROM orders ORDER BY id ASC`);
  return response.rows;
};

const getOrderById = async (id) => {
    const response = await client.query(`SELECT * FROM orders WHERE id = $1`, [
      id,
    ]);
    return response.rows[0];
};
  
const getOrderByUserId = async (params_id) => {
  const cart_response = await client.query(
    `SELECT * FROM orders WHERE user_id = $1`,
    [params_id]
  );
  return {
    cart: cart_response.rows,
  };
};

const deleteOrderById = async (id) => {
  await client.query(`DELETE FROM orders WHERE id = $1`, [Number(id)]);
  return {
    id: id,
  };
};

const postOrderByUserId = async (body) => {
    await client.query(`INSERT INTO orders(user_id, is_cart, created_at) VALUES($1, $2, now())`, [
      body.user_id,
      body.is_cart,
      body.created_at
    ]);
    return {
      user_id: body.user_id,
      is_cart: body.is_cart,
      created_at: body.created_at

    };
};
// ------------create purchase order by id changing boolean to true and updated time------------



module.exports = {
  getAllUsers,
  getUserById,
  // getUserByUsername,
  deleteUser,
  createUser,
  updateUser,
  getAllProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getAllOrder_Products,
  getOrder_ProductByOrderId,
  deleteOrder_Product,
  createOrder_Product,
  updateOrder_Product,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  deleteOrderById,
  postOrderByUserId,
  client,
};