import mongoose from "mongoose";

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Database is already connected");
    return;
  } else if (connectionState === 2) {
    console.log("Database is connecting");
    return;
  }


  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "restoreRestApi",
      bufferCommands: true,
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error instanceof Error ? error.message : error);
    throw new Error(`Database connection failed: ${error instanceof Error ? error.message : error}`);
  }
};

export default connect;
