import express from "express";
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchController,
  realtedProductController,
} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignin,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.put(
  "/update-product/:pid",
  requireSignin,
  isAdmin,
  formidable(),
  updateProductController
);

router.post("/product-filter", productFilterController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchController);

router.get("/related-product/:pid/:cid", realtedProductController);

export default router;
