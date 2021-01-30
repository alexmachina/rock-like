import { RequestHandler } from "express";
import * as repository from "../repository/mongo/like";

export const getLikeCount: RequestHandler = async (req, res) => {
  const topic = req.params.title;
  const user = req.query.user;
  const userLikes = await repository.getUserLikes(topic, user as string);

  res.json(userLikes);
};

export const increaseLikeCount: RequestHandler = async (req, res) => {
  const title = req.params.title;
  const user = req.query.user;
  const likes = await repository.addUserLike(title, user as string);

  return res.send();
};

export const decreaseLikeCount: RequestHandler = async (req, res) => {
  const title = req.params.title;
  const user = req.query.user;
  const likes = await repository.removeUserLike(title, user as string);

  return res.send();
};
