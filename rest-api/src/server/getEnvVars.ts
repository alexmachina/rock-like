type IEnv = {
  port: string | number;
  connectionString: string;
};

const checkEnvVars = (): IEnv => {
  const connectionString = process.env.MONGO_CONNECTION_STRING;
  const port = process.env.PORT;

  if (!port) {
    console.log("Error: missing PORT env var");
    process.exit(1);
  }

  if (!connectionString) {
    console.log("Error: missing MONGO_CONNECTION_STRING env var");
    process.exit(1);
  }

  return { connectionString, port };
};

export default checkEnvVars;
