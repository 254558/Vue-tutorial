<template>
  <button @click="emit('increment', 1)">
    点我 +1
  </button>
</template>

<script setup>
const emit = defineEmits(['increment'])
</script>

<style scoped>
button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #369f74;
}
</style>