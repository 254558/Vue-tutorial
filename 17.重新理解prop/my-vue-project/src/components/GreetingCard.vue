<template>
  <div class="card">
    <p>你好，{{ name }}！</p>
    <p v-if="age">你的年龄是：{{ age }}</p>
    <p v-else>年龄未知</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: '匿名',
    required: false
  },
  age: {
    type: Number,
    required: false
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
}
</style>