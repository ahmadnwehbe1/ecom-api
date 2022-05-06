const Product = require("../models/product");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const products = require("../data/products.json");
const { deleteMany } = require("../models/product");

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("products are deleted");

    await Product.insertMany(products);
    console.log("All Products are added");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
