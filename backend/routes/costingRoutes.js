import express from "express";
import { getCosting, getCostingByProject, postCosting, updateCosting } from "../controllers/costingController.js";

const router = express.Router();

router.post("/", postCosting);
router.get("/", getCosting);
router.get("/project", getCostingByProject);
router.put("/id", updateCosting);

export default router;
