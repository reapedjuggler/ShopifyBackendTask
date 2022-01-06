const productService = require("../services/productService");

// finds all the product
const getAllProduct = async (req, res, next) => {
	try {
		let resp = await productService.getAllProducts();

		if (resp.success == true) {
			res.send({ success: true, message: resp.message });
		} else {
			res.send({ success: false, message: "Error in getting Product List" });
		}
	} catch (err) {
		console.log(err);
		res.send({ success: false, message: "Error in getting Product List" });
	}
};

const addProduct = async (req, res, next) => {
	try {
		let { price, pname, pcategory, productId, stockCount } = req.body;

		let resp = await productService.addProduct(
			price,
			pname,
			pcategory,
			productId,
			stockCount
		);

		console.log(resp);
		if (resp.success == true) {
			res.send({ success: true, message: resp.message });
		} else {
			res.send({ success: false, message: "Error in creating your product" });
		}
	} catch (err) {
		console.log(err);
		res.send({ success: false, message: "Error in creating product" });
	}
};

module.exports = {
	getAllProduct,
	addProduct,
};
