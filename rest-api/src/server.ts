import app from "./app";
import mongoose from "mongoose";
require("dotenv").config();

const connectionString = process.env.MONGO_CONNECTION_STRING;
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
const port = process.env.PORT;

if (!connectionString) {
  console.log("Error: Missing connection string");
  process.exit(1);
}

mongoose
  .connect(connectionString, mongooseConfig)
  .then(() => {
    console.log("Mongo client READY");
    app.listen(port, () => console.log(`server listening on ${port}`));
  })
  .catch(console.error);
