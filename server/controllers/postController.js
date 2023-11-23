import Post from "../models/postModel.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc   Get Posts
// @route  GET /api/posts
// @access Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  res.status(200).json(posts);
});

// @desc   Get Post by ID
// @route  GET /api/posts/:id
// @access Public
const getPostById = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);

  if (post) {
    return res.status(200).json(post);
  }
  res.status(404);
  throw new Error("Post was not found");
});

// @desc   Add post
// @route  POST /api/posts
// @access Private
const addPost = asyncHandler(async (req, res) => {
  res.send("add post");
});

// @desc   Edit post
// @route  PUT /api/posts/:id
// @access Private
const editPost = asyncHandler(async (req, res) => {
  res.send("edit post");
});

// @desc   Delete post
// @route  DELETE /api/posts/:id
// @access Private
const deletePost = asyncHandler(async (req, res) => {
  res.send("delete post");
});

export { getPosts, getPostById, addPost, editPost, deletePost };
