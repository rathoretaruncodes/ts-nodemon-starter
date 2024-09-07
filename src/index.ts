import express from "express";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables form .env file

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});