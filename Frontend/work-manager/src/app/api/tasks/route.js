import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
//get all tasks
export async function GET(request) {

    let tasks=[];
    try {
        tasks=await Task.find();
    } catch (error) {
        return getResponseMessage("Error Getting Tasks",404,false);
    }
    return NextResponse.json(tasks);
}

//create task
export async function POST(request) {
  const { title, content, userId,status } = await request.json();

  const authToken=request.cookies.get("authToken")?.value;
  const data=jwt.verify(authToken,process.env.JWT_KEY);
  const task = new Task({
    title,
    content,
    status,
    userId:data._id,
  });
 
  console.log(task);
  try {
    
    const createdTask= await task.save();
    return NextResponse.json(createdTask,{
        status:201
    })
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed Creating Task",500,false)
  }
}
