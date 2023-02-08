import express from "express"
import { googleLogin, signin, signup } from "../controllers/auth.controllers.js";
const router = express.Router();


// CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google", googleLogin)

export default router