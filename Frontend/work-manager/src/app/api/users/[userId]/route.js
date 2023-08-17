import { NextResponse } from "next/server";

export function DELETE(request,{params}){
    console.log(params);
    const userId=params.userId;
    return NextResponse.json({
        message:"Testing"+userId,

    })
}