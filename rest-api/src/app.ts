import express from "express";
import likeRoutes from "./routes/likes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(likeRoutes);

export default app;
