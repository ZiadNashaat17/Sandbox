import { model, Schema } from "mongoose";

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  executionCount: {
    type: Number,
    required: true,
  },
  lastExecuted: {
    type: Date,
    required: true,
  }
});

const Test = model("Test", testSchema);

export default Test;
