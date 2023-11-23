import jwt from "jsonwebtoken";
import User from "../models/userModel";
import asyncHandler from "../utils/asyncHandler";

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

const admin = asyncHandler(async (req, res, next) => {});

export { protect, admin };
