import app from "../app";
import mongoose from "mongoose";
import getEnvVars from "./getEnvVars";

const startServer = async (): Promise<void> => {
  const { port, connectionString } = getEnvVars();

  const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  try {
    await mongoose.connect(connectionString, mongooseConfig);
    console.log("Mongoose READY");
    app.listen(port, () => console.log(`Server READY: ${port}`));
  } catch (err) {
    console.error(err);
  }
};

export default startServer;
