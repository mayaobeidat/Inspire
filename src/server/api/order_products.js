const express = require("express");
const router = express.Router();
const { 
    getAllOrder_Products,
    getOrder_ProductByOrderId,
    deleteOrder_Product,
    createOrder_Product,
    updateOrder_Product,
  } = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllOrder_Products());
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
    try {
      res.send(await getOrder_ProductByOrderId(req.params.id));
    } catch (err) {
      next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
      res.send(await deleteOrder_Product(req.params.id));
    } catch (err) {
      next(err);
    }
  });
  
  router.post("/", async (req, res, next) => {
    try {
      res.send(await createOrder_Product(req.params.id));
    } catch (err) {
      next(err);
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    try {
      res.send(await updateOrder_Product(req.params.id));
    } catch (err) {
      next(err);
    }
  });
module.exports = router;