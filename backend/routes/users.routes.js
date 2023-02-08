import express from "express"
import { deleteUser, dislikeVideo, getUser, likeVideo, subscribeUser, unscubscribeUser, updateUser } from "../controllers/users.controllers.js";
import { verifyToken } from "../utils/verifyTokens.utils.js";

const router = express.Router();

//update user
router.put("/:userId",verifyToken,updateUser)

//delete user
router.delete("/:userId",verifyToken,deleteUser);

//get a user
router.get("/find/:userId",getUser);

//subscribe a user
router.put("/sub/:userId",verifyToken,subscribeUser);

//unsubscribe a user
router.put("/unsub/:userId",verifyToken,unscubscribeUser);

//like a video
router.put("/like/:videoId",verifyToken,likeVideo);

//dislike a video
router.put("/dislike/:videoId",verifyToken,dislikeVideo);

export default router