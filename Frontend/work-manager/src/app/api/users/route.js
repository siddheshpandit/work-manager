import { NextResponse } from "next/server"

export function GET(request){
    const users=[{
        name:"Siddhesh",
        phone:7776041423,
        course:'Java'
    },
    {
        name:"Viru",
        phone:777604133,
        course:'Swift'
    },
    {
        name:"Apoorva",
        phone:7776041424,
        course:'Angular'
    },
]

    return NextResponse.json(users);
}

export function POST(){

}

export function DELETE(){
    console.log("Delete api");
    return NextResponse.json(
        {
            message:"Deleted",
            status:true
        },
        {
            status:201,
            statusText:"Deleted"
        }
    )
}