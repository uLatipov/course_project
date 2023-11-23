import { Router } from "express";
import {
  login,
  register,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

const router = Router();

router.route("/").get(getUsers).post(register);
router.post("/login", login);
router.route("/my").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
