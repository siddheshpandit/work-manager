import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

connectDb();
export async function POST(request){

    const {email,password}=await request.json();
    console.log(email);
    try {
        console.log("inside login");
        // 1. Get User
        const user=await User.findOne({
            email:email
        })
        console.log(user);
        if(user==null){
            throw new Error("User not found");
        }

        // 2. Check Password
        const matched=bcrypt.compareSync(password,user.password)
        if(!matched){
            throw new Error("Wrong Password");
        }

        // 3. Create Token
        const token=jwt.sign({
            _id:user._id,
            name:user.name
        },process.env.JWT_KEY)
        console.log(token);
        const response=NextResponse.json({
            message:"Login Successful",
            success:true,
            user:user
        })
        response.cookies.set("authToken",token,{
            expiresIn:"1d",
            httpOnly:true
        })
        return response;
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false
        },{
            status:500
        })
    }
}