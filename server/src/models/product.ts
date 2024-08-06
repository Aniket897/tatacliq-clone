import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
    },
    miniDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbImage: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: true,
    },
    keywords: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
