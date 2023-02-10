import express from "express"
import { addVideo, addView, deleteVideo, getVideo, random, trend, updateVideo, subVideo, getVideosFromTags, searchVideosFromTitle } from "../controllers/videos.controllers.js";
import { verifyToken } from "../utils/verifyTokens.utils.js";

const router = express.Router();


router.post("/", verifyToken, addVideo)

router.put("/:videoId", verifyToken, updateVideo);

router.delete("/:videoId", verifyToken, deleteVideo)

router.get("/find/:videoId", verifyToken, getVideo)

router.put("/view/:videoId",verifyToken, addView )

router.get("/trend", trend);

router.get("/random", random);

router.get("/sub",verifyToken,subVideo);

router.get("/tags", getVideosFromTags)

router.get("/search", searchVideosFromTitle)


export default router