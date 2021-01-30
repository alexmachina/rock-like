import Topic from "./schemas/Topic";

export type IUserLikes = {
  likes: number;
  liked: boolean;
};

export const getUserLikes = async (
  title: string,
  user: string
): Promise<IUserLikes> => {
  const result = await Topic.aggregate([
    { $match: { title } },
    {
      $project: {
        likes: { $size: "$users" },
        liked: { $in: [user, "$users"] },
      },
    },
  ]).exec();

  if (!result || !result.length) {
    await Topic.create({ title, users: [] });
    return { likes: 0, liked: false };
  }

  return result[0];
};

export const addUserLike = async (
  title: string,
  user: string
): Promise<void> => {
  await Topic.findOneAndUpdate(
    { title },
    { $addToSet: { users: user } },
    { new: true }
  ).exec();
};

export const removeUserLike = async (
  title: string,
  user: string
): Promise<void> => {
  await Topic.findOneAndUpdate(
    { title },
    { $pull: { users: user } },
    { new: true }
  ).exec();
};
