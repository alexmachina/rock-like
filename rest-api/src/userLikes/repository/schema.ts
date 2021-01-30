/* eslint-disable @typescript-eslint/ban-types */
import mongoose, { Document, Model, Schema } from "mongoose";
export interface IUserLikes extends Document {
  title: string;
  users: [String];
}

const userLikesSchema: Schema<IUserLikes> = new Schema({
  title: { type: String, required: true },
  users: [String],
});

const UserLikes: Model<IUserLikes> = mongoose.model<IUserLikes>(
  "userLikes",
  userLikesSchema
);

export default UserLikes;
