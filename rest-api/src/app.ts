import express from "express";
import userLikes from "./userLikes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userLikes);

export default app;
