const express = require("express");
const router = express.Router();
const { 
    getAllOrders, 
    getOrderById,
    getOrderByUserId,
    getDeleteOrderByUserId,
    getPostOrderByUserId 
} = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllOrders());
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
    try {
      res.send(await getOrderById(req.params.id));
    } catch (err) {
      next(err);
    }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await getOrderByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await getDeleteOrderByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await getPostOrderByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
