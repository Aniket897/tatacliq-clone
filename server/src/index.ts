import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import "dotenv/config";

import ConnectMongoose from "./config/db";
import router from "./routes";
import "./config/passport";

const PORT = process.env.PORT || 8080;
const dbUrl = process.env.MONGO_URL as string;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(
  session({
    secret: "aniket kangane",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// router
app.use(router);

app.listen(PORT, () => {
  console.log("server running on port :", PORT);
  ConnectMongoose(dbUrl);
});
