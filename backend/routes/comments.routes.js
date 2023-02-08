import express from "express"
import { addComment, deleteComment, getComments } from "../controllers/comments.controllers.js";
import { verifyToken } from "../utils/verifyTokens.utils.js";
const router = express.Router();

router.post("/",verifyToken,addComment);

router.get("/:videoId", getComments);

router.delete("/:commentId",verifyToken, deleteComment)

export default router