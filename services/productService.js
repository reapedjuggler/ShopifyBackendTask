// Constants
const mongoose = require("mongoose");

// Models
const products = require("../models/products");

// db connection
const db = mongoose.connection;

class Product {
	// Service to add a product to the db
	addProduct = async (price, pname, pcategory, productId, stockCount) => {
		try {
			let obj = { price, pname, pcategory, productId, stockCount };

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

	// Service to get all products
	getAllProducts = async () => {
		try {
			// Can be converted to model once there is a large data to be dealt with
			const resp = await db.collection("products").find({}).toArray();

			return { success: true, message: resp };
		} catch (err) {
			return { success: false, message: err.message };
		}
	};

	// Service for deleting a product (Check if its exists or not)
	deleteProduct = async productId => {
		try {
			let resp = await db
				.collection("products")
				.findOne({ productId: productId });

			console.log(resp);

			if (resp == null || Object.keys(resp).length == 0) {
				return { success: false, message: "Product not found" };
			} else {
				let id = resp._id;

				await db.collection("products").findOneAndDelete({ _id: id });

				return { success: true, message: "Product deleted" };
			}
		} catch (err) {
			console.log(err);
			return { success: false, message: "Product can not be deleted" };
		}
	};

	// Service to edit a product with given Pid
	editProduct = async (pid, price, stockCount) => {
		try {
			console.log(pid, "  ", price, "  ", stockCount);

			let resp = await db.collection("products").findOne({ productId: pid });

			console.log(resp, "  sad\n");

			let obj = {
				price,
				stockCount,
			};

			let id = resp._id;

			if (resp != null || Object.keys(resp).length) {
				await db
					.collection("products")
					.findOneAndUpdate({ _id: id }, { $set: obj });

				return { success: true, message: "Product editing successful" };
			} else {
				return { success: false, message: "Error in editing the product" };
			}
		} catch (err) {}
	};
}

module.exports = exports = new Product();
