// Constants
const mongoose = require("mongoose");

// Models
const products = require("../models/products");

// db connection
const db = mongoose.connection;

class Product {
	addProduct = async (pname, price, stockCount, productId, pcategory) => {
		try {
			let obj = { pname, price, stockCount, productId, pcategory };

			console.log(obj);

			await db.collection("products").insert(obj);

			return { success: true, message: "Product created" };
		} catch (err) {
			console.log(err);
			return {
				success: false,
				message: "Error in creating the entry for the product",
			};
		}
	};

	getAllProducts = async () => {
		try {
			const resp = await products.find({});

			return { success: true, message: resp };
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

// {
// 	pname: "nike",
// 	price: "1200",
// 	stockCount: 10,
// 	productId: 1,
// 	pcategory: "shoes"
// }
