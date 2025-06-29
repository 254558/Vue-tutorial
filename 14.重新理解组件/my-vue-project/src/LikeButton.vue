<template>
  <button @click="emitLike">👍 喜欢</button>
</template>

<script setup>
const emit = defineEmits(['like'])

function emitLike() {
  emit('like')
}
</script>

<style scoped>
button {
  padding: 6px 12px;
  font-size: 16px;
  margin-top: 12px;
}
</style>