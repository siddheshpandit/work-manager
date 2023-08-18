import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request) {
  let users=[]
  try {
    users=await User.find().select("-password");
  } catch (error) {
    return NextResponse.json({
      message:"Failed to Get Users",
      status:false
    })
  }
  return NextResponse.json(users);
}

export async function POST(request) {
  const { name, email, password, about, profileUrl } = await request.json();

  // console.log({ name, email, password, about, profileUrl });
  const user = new User({
    name,
    email,
    password,
    about,
    profileUrl,
  });
  console.log(user);
  try {
    // Save User to database
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Create User",
      status: false,
    });
  }
}

