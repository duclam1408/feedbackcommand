import { client } from "../config/config.js";
let db = null;
export async function connectDB() {
    if(!db){
        try {
            await client.connect();
            db = client.db("feedback");
            console.log("Connected.");
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Không thể kết nối MongoDB");
        } 
    }
    return db;
}
    
