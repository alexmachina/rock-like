import UserLikes, { IUserLikes } from "./schema";

type IAddUserLike = (title: string, user: string) => Promise<IUserLikes | null>;

const addUserLike: IAddUserLike = (title, user) =>
  UserLikes.findOneAndUpdate(
    { title },
    { $addToSet: { users: user } },
    { new: true }
  ).exec();

export default addUserLike;
