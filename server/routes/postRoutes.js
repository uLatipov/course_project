import { Router } from "express";
import { protect, postPrivate } from "../middlewares/authMiddleware.js";
import {
  getPosts,
  getPostById,
  addPost,
  editPost,
  deletePost,
} from "../controllers/postController.js";

const router = Router();

router.route("/").get(getPosts).post(protect, addPost);
router
  .route("/:id")
  .get(getPostById)
  .put(protect, postPrivate, editPost)
  .delete(protect, postPrivate, deletePost);

export default router;
