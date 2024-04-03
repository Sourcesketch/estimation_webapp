import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ScreenSchema = new Schema([
  {
    screenName: {
      type: String,
      required: true,
    },
    screenSections: {
      type: [String],
    },
    hours: {
      type: String,
      required: true,
    },
  },
]);

const ScreenListSchema = new Schema([
  {
    screens: {
      type: [ScreenSchema],
      required: true,
    },
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  },
]);

const Screen = mongoose.model("Screen", ScreenListSchema);
export default Screen;
