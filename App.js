import "dotenv/config";

import express from 'express';
import session from "express-session";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js"
import ModuleRoutes from "./Kanbas/modules/routes.js"
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import QuizQuestionsRoutes from "./Quizzes/QuestionsEditor/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
const DB_NAME = process.env.DB_NAME;

console.log(CONNECTION_STRING, DB_NAME)
mongoose.connect(CONNECTION_STRING, { dbName: DB_NAME });
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
 ); 
 const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
QuizQuestionsRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);

// for pre-lab of assignment 5