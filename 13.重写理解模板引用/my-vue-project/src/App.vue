<template>
  <div class="p-6">
    <h1>模板引用（template refs）示例</h1>

    <!-- 1. 获取 DOM 元素引用 -->
    <h2>获取 DOM 引用</h2>
    <input ref="inputRef" placeholder="点击按钮聚焦我" class="input-box" />
    <button @click="focusInput">聚焦输入框</button>

    <!-- 2. 获取组件引用 -->
    <h2 class="mt-6">获取组件引用</h2>
    <ChildComponent ref="childRef" />

    <button @click="callChildMethod">调用子组件方法</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 1. 获取 DOM 元素引用
const inputRef = ref(null)
function focusInput() {
  inputRef.value?.focus()
}

// 2. 获取组件引用
import ChildComponent from './ChildComponent.vue'
const childRef = ref(null)
function callChildMethod() {
  if (childRef.value) {
    childRef.value.sayHello()
  }
}

// 可选：onMounted 中访问 ref
onMounted(() => {
  console.log('inputRef:', inputRef.value) // 原生 DOM 元素
  console.log('childRef:', childRef.value) // 子组件实例
})
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
h2 {
  font-size: 18px;
  margin-top: 24px;
}
.input-box {
  padding: 6px;
  font-size: 14px;
  margin-right: 8px;
}
button {
  padding: 6px 12px;
  margin-top: 8px;
}
.mt-6 {
  margin-top: 1.5rem;
}
</style>