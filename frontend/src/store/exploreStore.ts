import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { getFolders, getSubFolders, getFiles, addFolder, addFile } from "../api/explorerApi";

export const useExplorerStore = defineStore("explorer", () => {
  const folders = ref([]);
  const selectedFolder = ref(null);
  const files = ref([]);
  const expandedFolders = reactive(new Set<number>());
  const searchQuery = ref("");

  const loadFolders = async () => {
    folders.value = await getFolders();
  };

  const selectFolder = async (id: number) => {
    selectedFolder.value = await getSubFolders(id);
    files.value = await getFiles(id);
  };

  const toggleFolder = (id: number) => {
    if (expandedFolders.has(id)) {
      expandedFolders.delete(id);
    } else {
      expandedFolders.add(id);
    }
  };

  const filteredFolders = computed(() =>
    folders.value.filter(folder => folder.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  );

  const filteredFiles = computed(() =>
    files.value.filter(file => file.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  );

  const createFolder = async (name: string, parent_id: number | null) => {
    await addFolder(name, parent_id);
    await loadFolders();
  };

  const createFile = async (name: string, type: string, size: number, folder_id: number) => {
    await addFile(name, type, size, folder_id);
    await selectFolder(folder_id);
  };

  return { folders, selectedFolder, files, expandedFolders, searchQuery, loadFolders, selectFolder, toggleFolder, filteredFolders, filteredFiles, createFolder, createFile };
});
