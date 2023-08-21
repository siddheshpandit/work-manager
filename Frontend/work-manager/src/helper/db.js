import mongoose from "mongoose"
export const connectDb=async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URI,{
            dbName: "work_manager"
        })
        console.log("DB Connection");

        // Testing database
        // const uuser=new User({
        //     name:"Siddhesh",
        //     email:"s@gmail.com",
        //     password:"siddhesh",
        //     about:"testing"
        // })

        // await uuser.save();
        // console.log("User is saved");
        // console.log(connection.host);
    } catch (error) {
        console.log("Failed to connect with database");
        console.log(error);
    }
}