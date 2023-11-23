import asyncHandler from "../utils/asyncHandler.js";

// @desc   Get Posts
// @route  GET /api/posts
// @access Public
const getPosts = asyncHandler(async (req, res) => {
  res.send("get all posts");
});

// @desc   Get Post by ID
// @route  GET /api/posts/:id
// @access Public
const getPostById = asyncHandler(async (req, res) => {
  res.send("get post by id");
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
