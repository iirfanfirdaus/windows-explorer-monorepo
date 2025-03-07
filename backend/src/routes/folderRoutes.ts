import { Router } from "express";
import { FolderController } from "../controllers/FolderController";

const router = Router();

router.get("/", FolderController.getAllFolders);
router.get("/:folderId", FolderController.getFolderById);
router.post("/", FolderController.createFolder);
router.delete("/:id", FolderController.deleteFolder);

export default router;
