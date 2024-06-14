const express = require("express");
const router = express.Router();
const { 
    getAllProducts, 
    getProductById 
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
  
module.exports = router;