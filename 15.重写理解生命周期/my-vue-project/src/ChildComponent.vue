<template>
  <div class="child-box">
    <p>👶 我是子组件，查看控制台看生命周期</p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('[子组件] onMounted：子组件挂载完成')
})

onUnmounted(() => {
  console.log('[子组件] onUnmounted：子组件被卸载')
})
</script>

<style scoped>
.child-box {
  margin-top: 16px;
  padding: 12px;
  border: 1px solid #aaa;
  border-radius: 6px;
  background-color: #f9f9f9;
}
</style>
