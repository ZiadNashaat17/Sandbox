import Test from "../models/testModel.js";

export const createTest = async (req, res) => {
  try {
    const { name } = req.body;
    // Implementation for creating a test

    const newTest = await Test.create({ name, executionCount: 0, lastExecuted: Date.now() });

    res.status(201).json({ success: true, message: "Test created successfully", data: newTest });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const executeTest = async (req, res) => {
  try {
    const { id } = req.params;
    // Implementation for executing a test

    const test = await Test.findById(id);
    if (!test) {
      return res.status(404).json({ success: false, message: "Test not found" });
    }

    const updateData = {
      name: 'Hello World',
      lastExecuted: new Date(),
      $inc: { executionCount: 1 }
    }

    const updatedTest = await Test.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json({ success: true, message: "Test executed successfully", data: updatedTest });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
