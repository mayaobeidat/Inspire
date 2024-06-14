const express = require('express');
const order_productsrouter = express.Router();
const {
    getAllOrders,
    getOrderById,
    postOrderByUserId,
    deleteOrderByUserId
} = require("../db/index"); 

order_productsrouter.get("/:id", async (req, res, next) => {
  try {
    const orders = await getAllOrders(req.params.id);
    res.send(orders);
  } catch (err) {
    next(err);
  }
});

order_productsrouter.post("/:id", async (req, res, next) => {
  try {
    const newOrder = await getOrderById (req.params.id, req.body);
    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
});

order_productsrouter.put("/:id", async (req, res, next) => {
  try {
    const updatedOrder = await postOrderByUserId(req.params.id, req.body);
    res.send(updatedOrder);
  } catch (err) {
    next(err);
  }
});

order_productsrouter.delete("/:id", async (req, res, next) => {
  try {
    const deletedOrder = await deleteOrderByUserId(req.params.id);
    res.send(deletedOrder);
  } catch (err) {
    next(err);
  }
});

module.exports = order_productsrouter;