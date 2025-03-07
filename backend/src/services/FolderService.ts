import { FolderRepository } from "../repositories/FolderRepository";

export class FolderService {
  private folderRepo = new FolderRepository();

  async getAllFolders() {
    return await this.folderRepo.getAllFolders();
  }

  async getFolderById(id: number) {
    return await this.folderRepo.getFolderById(id);
  }

  async createFolder(name: string, parent_id: number | null) {
    return await this.folderRepo.createFolder(name, parent_id);
  }

  async deleteFolder(id: number) {
    return await this.folderRepo.deleteFolder(id);
  }
}
