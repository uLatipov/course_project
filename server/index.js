import { config } from "dotenv";
config();
import connectDb from "./utils/dbConnect.js";
connectDb();
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "it is working" });
});

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));
