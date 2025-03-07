import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;

export const getFolders = async () => {
  const response = await api.get("/folders");
  console.log(response)
  return response.data;
};

export const getSubFolders = async (id: number) => {
  const response = await api.get(`/folders/${id}`);
  return response.data;
};

export const getFiles = async (folderId: number) => {
  const response = await api.get(`/files/${folderId}`);
  return response.data;
};

export const addFolder = async (name: string, parent_id: number | null) => {
  await api.post("/folders", { name, parent_id });
};

export const addFile = async (name: string, type: string, size: number, folder_id: number) => {
  await api.post("/files", { name, type, size, folder_id });
};
