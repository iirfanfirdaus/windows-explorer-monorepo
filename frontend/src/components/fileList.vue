<script setup lang="ts">
import { useExplorerStore } from "../store/exploreStore";

const store = useExplorerStore();
</script>

<template>
  <div class="panel">
    <h2>Files in {{ store.selectedFolder?.name || "..." }}</h2>
    <ul>
      <li v-for="file in store.filteredFiles" :key="file.id">
        📄 {{ file.name }} ({{ file.type }}, {{ file.size }} KB)
      </li>
    </ul>
  </div>
</template>

<style scoped>
.panel {
  width: 70%;
  padding: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
</style>
