import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";


//Get task by Id
export async function GET(request,{params}){
    const {taskId}=params;
    try {
        let task=await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        return getResponseMessage("Error Fetching Task",404,false);
    }
}

export async function PUT(request,{params}){
    const {taskId}=params;
    const {title,content,status}=await request.json();
    try {
        let task=await Task.findById(taskId);
        task.title=title;
        task.content=content;
        task.status=status;
        let updatedTask=await task.save();
        return NextResponse.json(updatedTask);
    } catch (error) {
        return getResponseMessage("Error Updating Task",500,false);
    }
}

export async function DELETE(request,{params}){
    const {taskId}=params;
    try {
        await Task.findByIdAndDelete(taskId);
        return NextResponse.json({
            message:"Task Deleted",
            status:true
        })
    } catch (error) {
        return getResponseMessage("Failed Deleting Task",500,false);
    }
}