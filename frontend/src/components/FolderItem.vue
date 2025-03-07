<script setup lang="ts">
import { defineProps } from "vue";
import { useExplorerStore } from "../store/exploreStore";

const store = useExplorerStore();
const props = defineProps<{ folder: any }>();

const toggle = () => {
  store.toggleFolder(props.folder.id);
};
</script>

<template>
  <li>
    <span @click="toggle">
      {{ store.expandedFolders.has(folder.id) ? "📂" : "📁" }} {{ folder.name }}
    </span>
    <ul v-if="store.expandedFolders.has(folder.id)">
      <FolderItem v-for="sub in folder.subfolders" :key="sub.id" :folder="sub" />
    </ul>
  </li>
</template>

<style scoped>
li {
  cursor: pointer;
  padding: 5px;
}
li:hover {
  background: #f0f0f0;
}
ul {
  list-style: none;
  padding-left: 20px;
}
</style>
