const pg = require("pg");

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

const deleteOrderByUserId = async (id) => {
  await client.query(`DELETE FROM orders WHERE id = $1`, [Number(id)]);
  return {
    id: id,
  };
};

const postOrderByUserId = async (body) => {
    await client.query(`INSERT INTO orders(product_id, user_id) VALUES($1, $2)`, [
      body.product_id,
      body.user_id,
    ]);
    return {
      product_id: body.product_id,
      user_id: body.user_id,
    };
};
  

module.exports = {
  getAllUsers,
  getUserById,
  getAllProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  deleteOrderByUserId,
  postOrderByUserId,
  client,
};