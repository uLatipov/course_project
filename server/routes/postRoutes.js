import { Router } from "express";
import {
  getPosts,
  getPostById,
  addPost,
  editPost,
  deletePost,
} from "../controllers/postController.js";

const router = Router();

router.route("/").get(getPosts).post(addPost);
router.route("/:id").get(getPostById).put(editPost).delete(deletePost);

export default router;
