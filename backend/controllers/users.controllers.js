import User from "../models/users.models.js"
import { createError } from "../utils/error.utils.js"
import Video from "../models/video.models.js";

//update user
export const updateUser = async (req,res, next) =>{
    if(req.params.userId === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
                $set: req.body
            },{new: true})
            res.status(200).json(updatedUser);
        }catch(e){
            return next(e)
        }
    }else{
        return next(createError(403, "You  can update only your account!"))
    }
}

//delete user
export const deleteUser = async(req,res, next) =>{
    if(req.params.userId === req.user.id){
        try{
            await User.findByIdAndDelete(req.params.userId)
            res.status(200).send("User has been deleted");
        }catch(e){
            return next(e)
        }
    }else{
        return next(createError(403, "You  can delete only your account!"))
    }
}

//get a user
export const getUser = async (req,res, next) =>{
    try{
        const user = await User.findById (req.params.userId);
        res.status(200).json(user);
    }catch(err){
        next(err)
    }
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fix bug of multiple subscribers
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//subscribe a user
export const subscribeUser = async (req,res, next) =>{
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers: req.params.userId}
        })
        await User.findByIdAndUpdate(req.params.userId,{
            $inc: {subscribers: 1}
        })
        res.status(200).json("Subscription successfull.")
    }catch(err){
        next(err);
    }
}

//unsubscribe a user
export const unscubscribeUser = async (req,res, next) =>{
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers: req.params.userId}
        })
        await User.findByIdAndUpdate(req.params.userId,{
            $inc: {subscribers: -1}
        })
        res.status(200).json("Unsubscription successfull.")
    }catch(err){
        next(err);
    }
}

//like a video
export const likeVideo = async (req,res, next) =>{
    const id = req.user.id;
    const videoId = req.user.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: {likes: id},
            $pull:{dislikes:id}
        })
        res.status(200).json("the video has been liked");
    }catch(err){
        next(err);
    }
}

//dislike a video
export const dislikeVideo = async (req,res, next) =>{
    const id = req.user.id;
    const videoId = req.user.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
            $pull: {likes: id},
            $addToSet:{dislikes:id}
        })
        res.status(200).json("the video has been liked");
    }catch(err){
        next(err);
    }
}