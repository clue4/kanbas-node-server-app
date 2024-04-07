import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js"
import ModuleRoutes from "./Kanbas/modules/routes.js"
import Hello from "./hello.js";
import Lab5 from "./lab5.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);

// for pre-lab of assignment 5