const express = require("express");
const router = express.Router();
const { 
    getAllOrders, 
    getOrderById,
    getOrderByUserId,
    DeleteOrderByUserId,
    PostOrderByUserId 
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
    res.send(await DeleteOrderByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await PostOrderByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
