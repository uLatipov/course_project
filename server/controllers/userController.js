import User from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc   Get users
// @route  GET /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  const posts = await User.find({});

  res.status(200).json(posts);
});

export { getUsers };
