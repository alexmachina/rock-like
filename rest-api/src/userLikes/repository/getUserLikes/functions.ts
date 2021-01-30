import { ILikeCount } from "../../../userLikes/types";
import UserLikes from "../schema";

export const parseQueryResult = (result: ILikeCount[]): ILikeCount => {
  const { likes, liked } = result[0];
  return { likes, liked };
};

export const noResult = (result: [] | null): boolean => {
  return !result || !result.length;
};

export const createNewEntry = async (title: string): Promise<ILikeCount> => {
  UserLikes.create({ title, users: [] });
  return { likes: 0, liked: false };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const buildQuery = (title: string, user: string) => {
  const match = { $match: { title } };
  const project = {
    $project: {
      likes: { $size: "$users" },
      liked: { $in: [user, "$users"] },
    },
  };
  const query = [match, project];
  return query;
};
