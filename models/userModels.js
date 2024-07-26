import mongoose, { model } from 'mongoose'


const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:[true,'Email already exists'],
        required:[true,'Email is required']

    },
    userName:{
        type:String,
        required:[true,'username is required'],

    },
    image:{
        type:String
    }
})

export const User= mongoose.models.User||mongoose.model('User',UserSchema)