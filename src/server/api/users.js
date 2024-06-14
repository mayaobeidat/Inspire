const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getOrderByUserId,
  getUserById,
  postOrderByUserId,
  deleteOrderByUserId,
} = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllUsers());
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await getUserById(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.get("/:id/orders", async (req, res, next) => {
  try {
    res.send(await getOrderByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.post("/:userId/orders", async (req, res, next) => {
  try {
    res.send(await postOrderByUserId(req.body));
  } catch (err) {
    next(err);
  }
});
router.delete("/:userId/orders/:id", async (req, res, next) => {
  try {
    res.send(await deleteOrderByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;