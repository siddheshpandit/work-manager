import mongoose, { Schema, mongo } from "mongoose";

const userSchema=new Schema({
    name:String,
    email:{
        type:String,
        required:[true,"Email Required!!!"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password Required!!"]
    },
    about:String,
    profileUrl:String,
    // address:{
    //     street:String,
    //     city:String,
    //     country:String,
    //     pinCode:Number
    // }
})

export const User=mongoose.models.users || mongoose.model("users",userSchema);