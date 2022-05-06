const express = require("express");
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router.get("/products", getProducts);
router.post(
  "/admin/product/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  newProduct
);
router.get("/product/:id", getSingleProduct);
router.put(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);
router.delete(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

router.put("/review", isAuthenticatedUser, createProductReview);

router.get("/reviews", isAuthenticatedUser, getProductReviews);

router.delete("/reviews", isAuthenticatedUser, deleteReview);

module.exports = router;
