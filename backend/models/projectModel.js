import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  proj_name: {
    type: String,
    required: true,
  },
  proj_type: {
    type: String,
    required: true,
  },
  prepared_by: {
    type: String,
    required: true,
  },
  proposal_for: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    required: true,
  },
  version: {
    type: Number,
    required: true,
  },
  proj_description: {
    type: String,
    required: true,
  },
  proj_tags: {
    type: [String],
    lowercase: true,
  },
  proj_status: {
    type: String,
    required: true,
  },
  terms_conditions: {
    type: String,
  },
  temp_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Temp",
  },
  resource_name: {
    type: String,
    //ref: "User",
  },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
