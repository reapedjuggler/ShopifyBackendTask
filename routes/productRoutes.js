const router = require("express").Router();

const getAllProducts =
	require("../controllers/productController").getAllProduct;

router.post("/getallproducts", getAllProducts);

module.exports = router;
