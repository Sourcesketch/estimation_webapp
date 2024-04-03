import mongoose from "mongoose";
const Schema = mongoose.Schema;

const costingSchema = new Schema({
  totalHours: {
    type: Number,
  },
  hourRate: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
  projectName: {
    type: String,
  },
});

const Costing = mongoose.model("Costing", costingSchema);
export default Costing;
