const express = require("express");
const router = express.Router();
const { 
    getAllProducts, 
    getProductById,
    DeleteProduct,
    CreateProduct,
    UpdateProduct
} = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllProducts());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
    try {
      res.send(await getProductById(req.params.id));
    } catch (err) {
      next(err);
    }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await DeleteProduct(req.params.id));
  } catch (err) {
    next(err);
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await CreateProduct(req.params.id));
  } catch (err) {
    next(err);
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await UpdateProduct(req.params.id));
  } catch (err) {
    next(err);
  }
})
  
module.exports = router;
