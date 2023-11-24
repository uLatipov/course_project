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
  const post = await Post.findById(postId).populate("user", "name email");

  if (post) {
    return res.status(200).json(post);
  } else {
    res.status(404);
    throw new Error("Post was not found");
  }
});

// @desc   Add post
// @route  POST /api/posts
// @access Private
const addPost = asyncHandler(async (req, res) => {
  const user = req.user;
  const { title, description, theme, tags, customFields } = req.body;

  try {
    const post = await Post.create({
      user: user._id,
      title,
      description,
      theme,
      tags,
      customFields: customFields ? customFields : null,
    });

    const createdPost = await Post.findById(post._id).populate(
      "user",
      "name email"
    );

    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Post parameters missing");
  }
});

// @desc   Edit post
// @route  PUT /api/posts/:id
// @access Private
const editPost = asyncHandler(async (req, res) => {
  const { title, description, theme, tags, customFields } = req.body;

  const foundPost = await Post.findById(req.params.id);
  foundPost.title = title || foundPost.title;
  foundPost.description = description || foundPost.description;
  foundPost.theme = theme || foundPost.theme;
  foundPost.tags = tags || foundPost.tags;
  foundPost.customFields = customFields || foundPost.customFields;

  const editedPost = await (
    await foundPost.save()
  ).populate("user", "name email");

  res.status(200).json(editedPost);
});

// @desc   Delete post
// @route  DELETE /api/posts/:id
// @access Private
const deletePost = asyncHandler(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.status(200).send({
    message: "Post deleted successfully",
  });
});

export { getPosts, getPostById, addPost, editPost, deletePost };
