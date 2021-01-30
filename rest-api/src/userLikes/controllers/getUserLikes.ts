import { RequestHandler } from "express";
import getUserLikesAction from "../repository/getUserLikes";

const getUserLikes: RequestHandler = async (req, res) => {
  const topic = req.params.title;
  const user = req.query.user;
  const userLikes = await getUserLikesAction(topic, user as string);

  res.json(userLikes);
};

export default getUserLikes;
