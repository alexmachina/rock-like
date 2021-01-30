import express from "express";
import { increaseLikeCount, decreaseLikeCount } from "../controllers/topic";
import { getLikeCount } from "../controllers/topic";
const likeRoutes = express.Router();

likeRoutes.get("/:title", getLikeCount);
likeRoutes.post("/:title", increaseLikeCount);
likeRoutes.delete("/:title", decreaseLikeCount);

export default likeRoutes;
