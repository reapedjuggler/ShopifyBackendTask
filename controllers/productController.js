const productService = require("../services/productService");

// Controller to find all the product
const getAllProduct = async (req, res) => {
	try {
		let resp = await productService.getAllProducts();

		if (resp.success == true) {
			console.log(resp.message);
			res.json({ success: true, message: resp.message });
		} else {
			res.send({ success: false, message: "Error in getting Product List" });
		}
	} catch (err) {
		console.log(err);
		res.send({ success: false, message: "Error in getting Product List" });
	}
};

// Controller to add a product
const addProduct = async (req, res) => {
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

// Controller for editing products
const editProduct = async (req, res) => {
	try {
		let { productId, stockCount, price } = req.body;

		let resp = await productService.editProduct(productId, price, stockCount);

		if (resp.success == true) {
			res.send({ success: true, message: "Product edited successfully" });
		} else {
			res.send({ success: false, message: res.message });
		}
	} catch (err) {
		res.send({ success: false, message: "Error in edit product controller" });
	}
};

const deleteProduct = async (req, res) => {
	try {
		let id = req.body.productId;

		let resp = await productService.deleteProduct(id);

		if (resp.success == true) {
			res.send({ success: true, message: "Product Deleted" });
		} else {
			res.send({ success: false, message: "Error in delete Product Service" });
		}
	} catch (err) {
		res.send({
			success: false,
			message: "Error in delete Product controller ",
		});
	}
};

module.exports = {
	getAllProduct,
	editProduct,
	addProduct,
	deleteProduct,
};
