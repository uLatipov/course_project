import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";
config();

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "it is working" });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));
