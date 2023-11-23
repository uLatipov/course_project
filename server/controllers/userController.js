import User from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateToken from "../utils/generateToken.js";
import { comparePassword } from "../utils/password.js";

// @desc   Login
// @route  POST /api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await comparePassword(password, user.password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});

// @desc   Register
// @route  POST /api/users
// @access Public
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc   Get users
// @route  GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const posts = await User.find({});

  res.status(200).json(posts);
});

// @desc   Get user by ID
// @route  GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const posts = await User.find({});

  res.send("get user by id");
});

// @desc   Update user
// @route  PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

// @desc   Delete user
// @route  DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc   Get user profile
// @route  GET /api/users/my
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc   Update user profile
// @route  PUT /api/users/my
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

export {
  login,
  register,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
};
