import express from "express";
import projectsRautes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// middlewares
app.use(express.json());

app.use(projectsRautes);
app.use(tasksRoutes);

export default app;
