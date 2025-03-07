<script setup lang="ts">
import { onMounted } from "vue";
import { useExplorerStore } from "../store/exploreStore";
import FolderItem from "./FolderItem.vue";

const store = useExplorerStore();

onMounted(() => {
  store.loadFolders();
});
</script>

<template>
  <div class="panel">
    <h2>Folders</h2>
    <ul>
      <FolderItem v-for="folder in store.filteredFolders" :key="folder.id" :folder="folder" />
    </ul>
  </div>
</template>

<style scoped>
.panel {
  width: 30%;
  padding: 1rem;
  border-right: 1px solid #ddd;
}
</style>
