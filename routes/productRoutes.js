const router = require("express").Router();

const getAllProducts =
	require("../controllers/productController").getAllProduct;

const addProduct = require("../controllers/productController").addProduct;

router.post("/getallproducts", getAllProducts);
router.post("/addproduct", addProduct);

module.exports = router;
