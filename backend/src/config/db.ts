import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  try {
    const info = await mongoose.connect(uri);
    console.log("data base connected", info.connection.host);
  } catch (error) {
    console.log("data base cannot connected", error);
  }
};
