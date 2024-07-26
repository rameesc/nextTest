import mongoose, { Schema } from 'mongoose'
import { type } from 'os'


const PromptSchema=new Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    prompt:{
        type:String,
        required:[true,'prompt is required.']
    },
    tag:{
        type:String,
        required:[true,'tag is required.']
    }
})

export const Prompt=mongoose.models.Prompt|| mongoose.model('Prompt',PromptSchema)