import mongoose from "mongoose";

const URI = 'mongodb+srv://remanthbabu:Test123@remanth.nwm0w.mongodb.net/?retryWrites=true&w=majority';



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
    await mongoose.connect(URI!, {
      dbName: "restoreRestApi",
      bufferCommands: true, 
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 5000, 
    });
    console.log("Database connected successfully");
  } catch (error: unknown) {
    console.error("Database connection error:", error);
    throw new Error(`Database connection failed: ${error}`);
  }
};

export default connect;
