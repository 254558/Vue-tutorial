<template>
  <div class="p-4">
    <h1>事件处理示例</h1>

    <!-- 1. 基本点击事件 -->
    <h2>点击按钮</h2>
    <button @click="increment">点击我 +1</button>
    <p>点击次数：{{ count }}</p>

    <!-- 2. 传参 + 原始事件对象 -->
    <h2>传参与事件对象</h2>
    <button @click="greet('张帅', $event)">打招呼</button>

    <!-- 3. 事件修饰符 -->
    <h2>事件修饰符</h2>
    <div @click="outerClick" class="box">
      外部区域
      <button @click.stop="innerClick">内部按钮（阻止冒泡）</button>
    </div>

    <!-- 4. 表单默认行为阻止 -->
    <h2>阻止默认行为</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="formInput" placeholder="输入点什么..." />
      <button type="submit">提交</button>
    </form>

    <!-- 5. 键盘事件修饰符 -->
    <h2>键盘事件</h2>
    <input
      @keyup.enter="onEnter"
      placeholder="按 Enter 触发"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 点击计数
const count = ref(0)
function increment() {
  count.value++
}

// 传参与事件对象
function greet(name, event) {
  alert(`你好，${name}！事件类型是：${event.type}`)
}

// 冒泡测试
function outerClick() {
  alert('你点击了外部区域')
}
function innerClick() {
  alert('你点击了按钮')
}

// 提交表单
const formInput = ref('')
function onSubmit() {
  alert(`你提交了：${formInput.value}`)
  formInput.value = ''
}

// 键盘事件
function onEnter(event) {
  alert(`你按下了 Enter：${event.target.value}`)
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
h2 {
  font-size: 18px;
  margin-top: 20px;
}
button {
  margin-top: 8px;
  padding: 6px 12px;
  font-size: 14px;
}
.box {
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #ccc;
}
input {
  margin-right: 8px;
  padding: 4px 8px;
}
</style>