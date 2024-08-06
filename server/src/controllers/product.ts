import { NextFunction, Request, Response } from "express";
import Product from "../models/product";

export const creteProduct = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      miniDescription,
      description,
      price,
      discount,
      thumbImage,
      images,
      category,
      quantity,
    } = req.body;

    // creating slug;
    let slug = title.split(" ").join("-").replace(",", "-");

    const slugExist = await Product.findOne({ slug });

    if (slugExist) {
      slug += Math.random() * 999999;
    }

    const product = await Product.create({
      slug,
      title,
      miniDescription,
      description,
      price,
      discount,
      thumbImage,
      images,
      category,
      quantity,
    });

    resp.status(200).json({
      message: "product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getProduct = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({ slug });

    if (!product) {
      return resp.status(400).json({
        message: "Product not found",
      });
    }

    resp.status(200).json({
      message: "",
      product,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getProductsList = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  try {
    const { page = 1, q, limit = 10, category } = req.query;
    const query: any = {};

    if (q !== null && q) {
      query.$or = [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ];
    }

    if (category !== null && category) {
      query.category = { $regex: category, $options: "i" };
    }

    console.log("Constructed Query:", query);

    const products = await Product.find(query)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    console.log(products);

    resp.status(200).json({
      message: "Products retrieved successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
    });
  }
};

export const addToCart = (req: Request, resp: Response) => {
  try {
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
    });
  }
};
