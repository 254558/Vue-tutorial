<template>
  <div class="p-6">
    <h1>生命周期示例</h1>

    <p>当前计数：{{ count }}</p>
    <button @click="increment">加一</button>
    <button @click="toggleChild">切换子组件</button>

    <ChildComponent v-if="showChild" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import ChildComponent from './ChildComponent.vue'

const count = ref(0)
const showChild = ref(true)

function increment() {
  count.value++
}

function toggleChild() {
  showChild.value = !showChild.value
}

onBeforeMount(() => {
  console.log('[父组件] onBeforeMount：组件即将挂载')
})

onMounted(() => {
  console.log('[父组件] onMounted：组件已挂载')
})

onBeforeUpdate(() => {
  console.log('[父组件] onBeforeUpdate：数据更新前')
})

onUpdated(() => {
  console.log('[父组件] onUpdated：数据更新后')
})

onBeforeUnmount(() => {
  console.log('[父组件] onBeforeUnmount：组件即将卸载')
})

onUnmounted(() => {
  console.log('[父组件] onUnmounted：组件已卸载')
})
</script>

<style scoped>
button {
  margin-right: 10px;
  padding: 6px 12px;
  margin-top: 10px;
}
</style>