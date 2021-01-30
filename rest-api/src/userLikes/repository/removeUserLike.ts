import UserLikes from "./schema";

type IRemoveUserLike = (title: string, user: string) => Promise<void>;

const removeUserLike: IRemoveUserLike = (title, user) =>
  UserLikes.findOneAndUpdate(
    { title },
    { $pull: { users: user } },
    { new: true }
  ).exec();

export default removeUserLike;
