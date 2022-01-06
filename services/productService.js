// Constants
const mongoose = require("mongoose");

// Models
const products = require("../models/products");

// db connection
const db = mongoose.connection;

class Product {
	createAllProducts = async (pname, price, stockCount, productId) => {};

	getAllProducts = async () => {
		try {
			const resp = await products.find({});

			return { success: true, message: data };
		} catch (err) {
			return { success: false, message: err.message };
		}
	};

	editProduct = async (pid, name, price, stockCount) => {
		try {
		} catch (err) {}
	};
}
module.exports = exports = new Product();
