import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import tempRoutes from "./routes/tempRoutes.js";
import projRoutes from "./routes/projRoutes.js";
import screenRoutes from "./routes/screenRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import revisionRoutes from "./routes/revisionRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import costingRoutes from "./routes/costingRoutes.js";
// env configuration
dotenv.config();

//connect to monogodb
connectDB();

//express app
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res, next) => {
  res.send("Api is running");
});

app.use("/api/users", userRoutes);
app.use("/api/temp", tempRoutes);
app.use("/api/projects", projRoutes);
app.use("/api/screens", screenRoutes);
app.use("/api/revisions", revisionRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/costing", costingRoutes);
// listen port on 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
