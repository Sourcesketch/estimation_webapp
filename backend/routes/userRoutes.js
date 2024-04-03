import express from "express";
import {
  registerUser,
  getAllusers,
  getAllresouces,
  getSelectedUser,
  getUserById,
  deleteUser,
  updateUser,
  authUser,
  sortUsers,
} from "../controllers/userController.js";
import {
  verifyToken,
  admin,
  level2,
  level1,
} from "../middlewares/authHandler.js";

const router = express.Router();

router.post("/signin", level2, level1, authUser);
router.post('/register', registerUser);
router.get("/sortUser", verifyToken, sortUsers);
router.get("/", verifyToken, getAllusers);
router.get("/resources", getAllresouces);
router.get("/selectedUser", getSelectedUser);
router.get("/:id", verifyToken, getUserById);
router.delete("/:id", verifyToken, deleteUser);
router.put("/:id", updateUser);

export default router;
