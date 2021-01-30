import express from "express";
import { getUserLikes, addUserLike, removeUserLike } from "./controllers";

const userLikes = express.Router();

userLikes.get("/:title", getUserLikes);
userLikes.post("/:title", addUserLike);
userLikes.delete("/:title", removeUserLike);

export default userLikes;
