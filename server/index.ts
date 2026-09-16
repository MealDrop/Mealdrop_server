import express, { type Request, type Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Server is healthy",   
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});