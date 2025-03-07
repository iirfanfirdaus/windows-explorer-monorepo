import { Router } from "express";
import { FileController } from "../controllers/FileController";

const router = Router();

router.get("/:folderId", FileController.getFilesByFolderId);
router.post("/", FileController.createFile);
router.delete("/:id", FileController.deleteFile);

export default router;
