const express = require("express");
const router = express.Router();
const { 
    getAllOrders, 
    getOrderById,
    deleteOrderById,
    postOrderByUserId, 
    // checkout
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

router.delete("/:id", async (req, res, next) => {
  try {
    res.send(await deleteOrderById(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    res.send(await postOrderByUserId(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;