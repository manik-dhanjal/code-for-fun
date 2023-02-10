import Video from "../models/video.models.js";
import User from "../models/users.models.js";
import { createError } from "../utils/error.utils.js";


export const addVideo = async (req,res,next) => {
    const newVideo = new Video({
        userId: req.user.id,
        ...req.body
    })
    try{
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    }catch(err){
        next(err);
    }
}

export const updateVideo = async (req,res,next) => {
    try{
        const video = await Video.findById(req.params.videoId);
        if(!video) return next(createError(404, "Video Not found!"));
        if(req.user.id === video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.videoId,
                {
                    $set: req.body
                },{
                    new: true
                }
            )
            res.status(200).json(updatedVideo)
        }else{
            return next(createError(403,"You can update only your video"));
        }
    }catch(err){
        next(err);
    }
}

export const deleteVideo = async (req,res,next) => {
    try{
        const video = await Video.findById(req.params.videoId);
        if(!video) return next(createError(404, "Video Not found!"));
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.videoId)
            res.status(200).json("video is deleted successfully");
        }else{
            return next(createError(403,"You can delete only your video"));
        }
    }catch(err){
        next(err);
    }
}

export const getVideo = async (req,res,next) => {
    try{
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    }catch(e){
        next(e)
    }
}

export const trend = async(req, res, next) => {
    try{
        const videos = await Video.find().sort({views:-1});
        res.status(200).json(videos);
    }catch(err){
        next(err);
    }
}

export const addView = async(req, res, next) => {
    try{
       await Video.findByIdAndUpdate(req.params.videoId,{
        $inc:{views:1}
       })
       res.status(200).json("The view has been increased.")
    }catch(err){
        next(err);
    }
}

export const random = async(req, res, next) =>{
    try{
        const videos = await Video.aggregate([{
            $sample: {size: 40}
        }])
        res.status(200).send(videos)
    }catch(err){
        next(err);
    }
}

export const subVideo = async(req,res, next) => {
    try{
        const user = await User.findById(req.user.id)
        const subscribedChannels = user.subscribedUsers;

        const list = await Promise.all(subscribedChannels.map( channelId => {
            return Video.find({userId: channelId})
        }))

        res.status(200).json(list.flat().sort((a,b) => b.createdAt - a.createdAt));
    }catch(err){
        next(err);
    }
}

export const getVideosFromTags = async(req, res, next) => {
    const tags = req.query.tags.split(",");
    try{
        const videos = await Video.find({tags: {$in: tags}}).limit(20);
        res.status(200).json(videos);
    }catch(e){
        next(e);
    }
}

export const searchVideosFromTitle = async(req, res, next) => {
    const query = req.query.q;
    try{
        const videos = await Video.find({title: {$regex:query, $option:'i'}}).limit(20);
        res.status(200).json(videos);
    }catch(e){
        next(e);
    }
}