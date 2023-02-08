import Comment from "../models/comments.models.js"
import Video from "../models/video.models.js"
import { createError } from "../utils/error.utils.js";

export const addComment = async (req, res, next) => {
    try{
        const newComment = new Comment({...req.body, userId: req.user.id});
        const savedComment = await Comment.save();
        res.status(200).send("comment saved!");
    }catch(e){
        next(e);
    }
}

export const deleteComment = async (req, res, next) => {
    try{
        const comment = await Comment.findById(res.params.commentId);
        const video = await Video.findById(comment.VideoId);
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.commentId)
            res.status(200).json("comment is deleted!");
        }else{
            return next(createError(403, "you cannot delete this comment"));
        }
    }catch(err){
        next(err)
    }
}

export const getComments = async (req, res, next) => {
    try{
        const comments = await Comment.find({videoId: req.params.videoId});
        res.status(200).json(comments);
    }catch(e){
        next(e);
    }
}