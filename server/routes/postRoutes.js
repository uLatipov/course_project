import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => res.send("posts route get"));

export default router;
