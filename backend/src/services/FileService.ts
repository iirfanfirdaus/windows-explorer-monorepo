import { FileRepository } from "../repositories/FileRepository";

export class FileService {
  private fileRepo = new FileRepository();

  async getFilesByFolderId(folder_id: number) {
    return await this.fileRepo.getFilesByFolderId(folder_id);
  }

  async createFile(name: string, type: string, size: number, folder_id: number) {
    return await this.fileRepo.createFile(name, type, size, folder_id);
  }

  async deleteFile(id: number) {
    return await this.fileRepo.deleteFile(id);
  }
}
