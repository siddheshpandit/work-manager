import { User } from "@/models/user";
import { NextResponse } from "next/server";

//Delete User
export async function DELETE(request,{params}){
    // const userId=params.userId;
    const {userId}=params;
    try {
        await User.deleteOne({
            _id:userId
        })
        return NextResponse.json({
            message:"User Deleted",
            status:true
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error Deleting User",
            status:false
        })       
    }
}

export async function GET(request,{params}){
    const {userId}=params;
    try {
        const user=await User.findById(userId);
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({
            message:"Error fetching user",
            status:false
        })
    }
}

//Update User
export async function PUT(request,{params}){
    const {userId}=params;
    const{name,password,about,profileUrl}=await request.json();
    console.log(userId);
    try {
        const user=await User.findById(userId);
        user.name=name;
        user.password=password;
        user.about=about;
        user.profileUrl=profileUrl;

        const updatedUser=await user.save();
        return NextResponse.json(updatedUser)
    } catch (error) {
        return NextResponse.json({
            message:"Error updating user",
            status:false
        })
    }
}