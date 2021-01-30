import { RequestHandler } from "express";
import addUserLikeAction from "../repository/addUserLike";

const addUserLike: RequestHandler = async (req, res) => {
  const title = req.params.title;
  const user = req.query.user;
  await addUserLikeAction(title, user as string);

  return res.send();
};

export default addUserLike;
