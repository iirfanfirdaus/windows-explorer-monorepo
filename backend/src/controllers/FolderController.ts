import { Request, Response } from "express";
import { FolderService } from "../services/FolderService";

const folderService = new FolderService();

export class FolderController {
  static async getAllFolders(req: Request, res: Response) {
    try {
      const folders = await folderService.getAllFolders();
      res.json(folders);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getFolderById(req: Request, res: Response) {
    try {
      const { folderId } = req.params;
      
      const folder = await folderService.getFolderById(Number(folderId));
      // if (!folder) return res.status(404).json({ error: "Folder not found" });
      res.json(folder);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async createFolder(req: Request, res: Response) {
    try {
      const { name, parent_id } = req.body;
      const newFolder = await folderService.createFolder(name, parent_id);
      res.status(201).json(newFolder);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteFolder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await folderService.deleteFolder(Number(id));
      res.json({ message: "Folder deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}