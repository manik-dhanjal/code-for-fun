import mongoose from "mongoose"

const VideoSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true,
    },
    title:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    },
    videoUrl:{
        type:String,
        required: true
    },
    thumbUrl:{
        type:String,
        required: true
    },
    tags:{
        type:[String],
        default:[]
    },
    likes:{
        type:[String],
        default:[]
    },
    dislikes:{
        type:[String],
        default:[]
    }
},{timestamps:true})

export default mongoose.model("Videos",VideoSchema)