import { connectDB } from "../db/connectDB.js";

export async function CreateFeedbackAsync( feedback ){
    try{
        const db = await connectDB();

        const collection = db.collection("context");
        console.log("Noi dung feedback: ",feedback);
        const result = await collection.insertOne(feedback);

        console.log("Feedback đã thêm");
    } catch (error){
        console.log("Lỗi thêm feedback", error);
    }
}