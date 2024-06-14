const express = require("express");
const router = express.Router();
const { 
    getAllProducts, 
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
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

router.delete("/:id", async (req, res, next) => {
  try {
    res.send(await deleteProduct(req.params.id));
  } catch (err) {
    next(err);
  }
})

router.post("/:id", async (req, res, next) => {
  try {
    res.send(await createProduct(req.params.id));
  } catch (err) {
    next(err);
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    res.send(await updateProduct(req.params.id));
  } catch (err) {
    next(err);
  }
})
  
module.exports = router;
