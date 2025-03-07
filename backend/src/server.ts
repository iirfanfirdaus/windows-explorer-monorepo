import express from "express";
import { connectDB, sequelize } from "./config/database";
import folderRoutes from "./routes/folderRoutes";
import fileRoutes from "./routes/fileRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Koneksi Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await sequelize.sync({ alter: true }); // Sync database
});

app.use("/api/folders", folderRoutes);
app.use("/api/files", fileRoutes);
