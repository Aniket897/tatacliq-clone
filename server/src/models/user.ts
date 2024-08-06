import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
  },
  profile: {
    name: String,
    email: String,
    phone: String,
    avatar: String,
  },
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Order",
    },
  ],
  bag: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default mongoose.model("User", userSchema);
