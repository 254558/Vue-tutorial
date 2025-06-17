<template>
  <div class="p-4">
    <h1>Class 和 Style 绑定示例</h1>

    <!-- 1. 绑定对象形式的 class -->
    <h2 :class="{ active: isActive, 'text-danger': hasError }">
      对象语法的 class 绑定
    </h2>

    <!-- 2. 绑定数组形式的 class -->
    <h2 :class="classList">
      数组语法的 class 绑定
    </h2>

    <!-- 3. 绑定 style 对象 -->
    <p :style="styleObject">
      对象语法的 style 绑定
    </p>

    <!-- 4. 绑定多个 style 对象 -->
    <p :style="[baseStyle, dynamicStyle]">
      多个 style 对象绑定（数组）
    </p>

    <!-- 控制状态 -->
    <button @click="toggleState">切换状态</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 控制状态
const isActive = ref(true)
const hasError = ref(false)

// 绑定数组形式的 class
const classList = computed(() => {
  return ['title', isActive.value ? 'active' : '', hasError.value ? 'text-danger' : '']
})

// 单个 style 对象
const styleObject = ref({
  color: 'blue',
  fontSize: '18px'
})

// 多个 style 对象组合绑定
const baseStyle = {
  fontWeight: 'bold'
}

const dynamicStyle = computed(() => ({
  backgroundColor: isActive.value ? 'lightgreen' : 'lightcoral',
  padding: '8px'
}))

// 切换状态
function toggleState() {
  isActive.value = !isActive.value
  hasError.value = !hasError.value
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 12px;
}
.title {
  font-style: italic;
}
.active {
  color: green;
}
.text-danger {
  color: red;
}
button {
  margin-top: 16px;
  padding: 6px 12px;
  font-size: 16px;
}
</style>