import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { CreateFeedbackAsync } from "./services/mongoService.js";

dotenv.config({path : ""});

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/", async (req, res) => {
    console.log("Received request:", JSON.stringify(req.body, null, 2)); 

    const { type, message } = req.body;
    console.log(type);
    console.log(message);

    if (!message || !message.text) {
        return res.sendStatus(200);
    }

    if (type === "MESSAGE" && message.text.startsWith("/feedback")) {
        console.log("Cảm ơn bạn đã đóng góp ý kiến!");
        const feedbackText = message.text.replace("/feedback", "").trim();
        await CreateFeedbackAsync({text: feedbackText});
        return res.json({
            text: "Cảm ơn bạn đã đóng góp ý kiến!",
        });
    }
    
    res.sendStatus(200); // Luôn trả về 200 OK để tránh lỗi Google Chat
});


app.get("/", (req, res) => {
    res.send("Chào mừng bạn đến với Chatbot API!!");
})
app.listen(PORT, () => {
    console.log(`🚀 Bot đang chạy trên http://localhost:${PORT}`);
});
