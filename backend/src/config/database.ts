import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Folder } from "../models/Folder";
import { File } from "../models/File";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [Folder, File], // Pakai array eksplisit, bukan path string
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
