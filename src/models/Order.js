import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  productId: mongoose.Types.ObjectId,
  quantity: Number,
});

const Order = new mongoose.model("Order", orderSchema);

// module.exports = Order;
export default Order;
