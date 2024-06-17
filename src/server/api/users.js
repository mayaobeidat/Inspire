const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  deleteUser,
  createUser,
  updateUser,
  getOrderByUserId,
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
router.delete("/:id", async (req, res, next) => {
  try {
    res.send(await deleteUser(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    res.send(await createUser(req.body));
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    res.send(await updateUser(req.params.id, req.body));
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
module.exports = router;