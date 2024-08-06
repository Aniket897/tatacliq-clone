import express from "express";
import {
  creteProduct,
  getProduct,
  getProductsList,
} from "../controllers/product";

const router = express.Router();

router.post("/", creteProduct);
router.get("/list", getProductsList);
router.get("/:slug", getProduct);

export default router;
