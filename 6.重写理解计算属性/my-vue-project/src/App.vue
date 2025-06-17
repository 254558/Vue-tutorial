<template>
  <div class="p-4">
    <h1>计算属性示例</h1>

    <h2>基本用法</h2>
    <p>原始消息：{{ message }}</p>
    <p>反转后的消息（计算属性）：{{ reversedMessage }}</p>
    <p>反转后的消息（方法）：{{ reverseMessageMethod() }}</p>

    <h2>可读写计算属性</h2>
    <input v-model="fullName" />
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. 基本计算属性
const message = ref('Hello Vue 3')

// 使用 computed 创建只读属性
const reversedMessage = computed(() => {
  return message.value.split('').reverse().join('')
})

// 方法对比（每次都会执行）
function reverseMessageMethod() {
  return message.value.split('').reverse().join('')
}

// 2. 可读写的计算属性
const firstName = ref('张')
const lastName = ref('帅')

// computed 配置 getter 和 setter
const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(newValue) {
    const names = newValue.split(' ')
    firstName.value = names[0] || ''
    lastName.value = names[1] || ''
  }
})
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 12px;
}
h2 {
  font-size: 18px;
  margin-top: 20px;
}
input {
  padding: 4px;
  margin: 8px 0;
  font-size: 16px;
}
</style>