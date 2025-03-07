import { File } from "../models/File";

export class FileRepository {
  async getFilesByFolderId(folder_id: number) {
    return await File.findAll({ where: { folder_id } });
  }

  async createFile(name: string, type: string, size: number, folder_id: number) {
    return await File.create({ name, type, size, folder_id });
  }

  async deleteFile(id: number) {
    return await File.destroy({ where: { id } });
  }
}
