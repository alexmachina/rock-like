import { ILikeCount } from "../../../userLikes/types";
import UserLikes from "../schema";

import {
  createNewEntry,
  buildQuery,
  noResult,
  parseQueryResult,
} from "./functions";

type IGetUserLikes = (title: string, user: string) => Promise<ILikeCount>;

const getUserLikes: IGetUserLikes = async (title, user) => {
  const query = buildQuery(title, user);
  const result = await UserLikes.aggregate(query).exec();

  if (noResult(result)) {
    return createNewEntry(title);
  }

  const userLikes = parseQueryResult(result);
  return userLikes;
};

export default getUserLikes;
