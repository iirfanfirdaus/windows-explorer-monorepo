<script setup lang="ts">
import { ref } from "vue";
import { useExplorerStore } from "../store/exploreStore";
import FolderTree from "../components/FolderTree.vue";
import FileList from "../components/fileList.vue";

const store = useExplorerStore();
const newFolderName = ref("");
const newFileName = ref("");
</script>

<template>
  <div class="explorer">
    <input v-model="store.searchQuery" placeholder="Search..." />
    <div>
      <input v-model="newFolderName" placeholder="New Folder Name" />
      <button @click="store.createFolder(newFolderName, store.selectedFolder?.id || null)">Add Folder</button>
    </div>
    <div>
      <input v-model="newFileName" placeholder="New File Name" />
      <button @click="store.createFile(newFileName, 'txt', 100, store.selectedFolder?.id || 1)">Add File</button>
    </div>
    <FolderTree />
    <FileList />
  </div>
</template>

<style scoped>
.explorer {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
input {
  padding: 5px;
  margin: 10px;
  width: 200px;
}
</style>
