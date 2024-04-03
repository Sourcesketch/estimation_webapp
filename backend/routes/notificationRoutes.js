import express from "express";
import {
  sendNotification,
  getNotification,
  updateNotification
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/", sendNotification);
router.get("/", getNotification);
router.put("/", updateNotification);

export default router;
