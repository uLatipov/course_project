import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import Post from "../models/postModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read jwt from cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token invalid");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
});

const postPrivate = asyncHandler(async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findById(postId).populate("user", "name email");

  if (post) {
    if (
      String(post.user._id) === String(req.user._id) ||
      req.user.isAdmin === true
    ) {
      next();
    } else {
      res.status(403);
      throw new Error("Insufficent rights to edit post");
    }
  } else {
    res.status(404);
    throw new Error("Post was not found");
  }
});

export { protect, admin, postPrivate };
