import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITopic extends Document {
  title: string;
  users: [String];
}

const topicSchema: Schema<ITopic> = new Schema({
  title: { type: String, required: true },
  users: [String],
});

const Topic: Model<ITopic> = mongoose.model<ITopic>("Topic", topicSchema);

export default Topic;
