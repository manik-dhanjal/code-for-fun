import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.routes.js";
import videoRoutes from "./routes/videos.routes.js";
import commentsRoutes from "./routes/comments.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO)
    .then(() =>{
        console.log("Database is connected successfully")
    })
    .catch((err) => {
        throw err;
    })
}
app.use(cookieParser())
app.use(express.json())
app.use("/api/user",userRoutes)
app.use("/api/video",videoRoutes);
app.use("/api/comment",commentsRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!"
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

const PORT = process.env.PORT||8000;
app.listen(PORT,async () => {
    await connect();
    console.log("server is started at PORT: "+PORT)
})