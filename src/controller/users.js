import User from "../models/User.js";

export const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
    res.status(200).send("ALL ORDERS");
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const getUser = async (req, res) => {
  const {id} = req.params;
  try {
    const response = await User.findById(id);
    res.status(200).json(response);
    res.status(200).send(`Der order mit der id "${id}" wird hier angezeigt`);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const deleteUser = async (req, res) => {
    try {
      const response = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(response);
      res.status(200).json({
        message: "Der order wurde gelöscht",
      });
    } catch (error) {
      console.log({ error });
      res.status(500).json({ msg: "Server error!" });
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      const response = await User.findByIdAndUpdate(req.params.id, req.body, {
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
