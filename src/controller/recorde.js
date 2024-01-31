import  Record  from "../models/Record.js";

export const createRecord = async (req, res) => {
  try {
    const { title, artist, year, cover, price } = req.body;
    const newRecord = new Record({ title, artist, year, cover, price });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const getAllRecords = async (req, res) => {
  try {
    const response = await Record.find();
    res.status(200).json(response);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

export const getOneRecord = async (req, res) => {
  const {id} = req.params;
  try {
    const response = await Record.findById(id);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

// PUT (update) a specific record by ID
export const updateOneRecord = async (req, res) => {
  try {
    const response = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};

// DELETE a specific record by ID
export const deleteOneRecord = async (req, res) => {
  try {
    const response = await Record.findByIdAndDelete(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Server error!" });
  }
};
