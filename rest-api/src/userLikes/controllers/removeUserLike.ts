import { RequestHandler } from "express";
import removeUserLikeAction from "../repository/removeUserLike";

const removeUserLike: RequestHandler = async (req, res) => {
  const title = req.params.title;
  const user = req.query.user;
  await removeUserLikeAction(title, user as string);

  return res.send();
};

export default removeUserLike;
