import mongoose from "mongoose";

export default function ConnectMongoose(url: string) {
  mongoose
    .connect(url, {
      dbName: "cw-5",
    })
    .then(() => {
      console.log("mongoose connected");
    })
    .catch((error) => {
      console.log("failed to connect mongoose", error);
    });
}
