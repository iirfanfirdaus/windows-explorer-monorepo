import { Folder } from "../models/Folder";

export class FolderRepository {
  async getAllFolders() {
    return await Folder.findAll();
  }

  async getFolderById(id: number) {
    return await Folder.findByPk(id, { include: [{ all: true }] });
  }

  async createFolder(name: string, parent_id: number | null) {
    return await Folder.create({ name, parent_id });
  }

  async deleteFolder(id: number) {
    return await Folder.destroy({ where: { id } });
  }
}
