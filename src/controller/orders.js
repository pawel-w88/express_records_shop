import Order from "../models/Order.js";

export const createNewOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const newOrder = new Order({ productId, quantity });
    await newOrder.save();
    res.status(201).json(newOrder);
    // res.status(201).send("CREATING AN NEW ORDER");
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const response = await Order.find();
    res.status(200).json(response);
    res.status(200).send("ALL ORDERS");
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const response = await Order.findById(id);
    res.status(200).json(response);
    res.status(200).send(`Der order mit der id "${id}" wird hier angezeigt`);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const response = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(response);
    res.status(200).json({
      message: "Der order wurde gelöscht",
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const response = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(response);
    res.status(200).json({
      message: "Der order wurde geupdated",
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};
