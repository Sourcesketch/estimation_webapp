import express from "express";
import {
  addScreen,
  deleteScreen,
  getAllScreen,
  getScreenById,
  updateScreen,
} from "../controllers/screenController.js";
import {
  verifyToken,
  admin,
  level2,
  level1,
} from "../middlewares/authHandler.js";

const router = express.Router();

router.get("/", getAllScreen);
router.post("/:id", addScreen);
router.get("/id", getScreenById);
router.delete("/:id", deleteScreen);
router.put("/id", updateScreen);

export default router;
