import express from "express";
import projectsRautes from "./routes/projects.routes.js";

const app = express();

// middlewares
app.use(express.json());

app.use(projectsRautes);

export default app;
