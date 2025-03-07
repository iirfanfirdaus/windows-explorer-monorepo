import { Request, Response } from "express";
import { FileService } from "../services/FileService";

const fileService = new FileService();

export class FileController {
  static async getFilesByFolderId(req: Request, res: Response) {
    try {
      const { folderId } = req.params;
      const files = await fileService.getFilesByFolderId(Number(folderId));
      res.json(files);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async createFile(req: Request, res: Response) {
    try {
      const { name, type, size, folder_id } = req.body;
      const newFile = await fileService.createFile(name, type, size, folder_id);
      res.status(201).json(newFile);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteFile(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await fileService.deleteFile(Number(id));
      res.json({ message: "File deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
