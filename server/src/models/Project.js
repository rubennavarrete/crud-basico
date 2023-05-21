import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    timestamps: false,
  }
);

Project.hasMany(Task, { foreingKey: "projectId", sourceKey: "id" });
Task.belongsTo(Project, { foreingKey: "projectId", targetId: "id" });
