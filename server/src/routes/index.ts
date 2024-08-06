import express from "express";

const router = express.Router();
import productRouter from "./product";
import authRouter from "./auth";
router.use("/product", productRouter);
router.use("/auth", authRouter);

export default router;
