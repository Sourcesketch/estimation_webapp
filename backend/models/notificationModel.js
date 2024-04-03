import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    senderName: {
      type: String,
    },
    receiptName: {
      type: String,
    },
    projectName: {
      type: String,
    },
    read: {
      type: Boolean,
    },
    count: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model("Notification", NotificationSchema);
export default Notification;
