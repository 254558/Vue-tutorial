<template>
  <div class="p-4">
    <h1>侦听器（watch）示例</h1>

    <!-- 1. 基本用法 -->
    <h2>基本 watch</h2>
    <input v-model="name" placeholder="请输入你的名字" />
    <p>你好，{{ name }}！</p>
    <p>watch 检测到 name 的变化记录在下方：</p>
    <ul>
      <li v-for="(log, index) in nameLogs" :key="index">{{ log }}</li>
    </ul>

    <!-- 2. 侦听多个数据 -->
    <h2>侦听多个值</h2>
    <input type="number" v-model.number="x" placeholder="x 坐标" />
    <input type="number" v-model.number="y" placeholder="y 坐标" />
    <p>坐标：({{ x }}, {{ y }})</p>

    <!-- 3. 深度侦听 -->
    <h2>深度 watch</h2>
    <button @click="user.info.age++">增加年龄</button>
    <p>姓名：{{ user.name }}，年龄：{{ user.info.age }}</p>
    <p>变化日志：</p>
    <ul>
      <li v-for="(log, index) in deepLogs" :key="index">{{ log }}</li>
    </ul>

    <!-- 4. 立即执行的 watch -->
    <h2>immediate: true 示例</h2>
    <input v-model="search" placeholder="模拟搜索输入" />
    <p>搜索建议：{{ suggestion }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, watch, watchEffect } from 'vue'

// 1. 基本 watch
const name = ref('')
const nameLogs = ref([])
watch(name, (newVal, oldVal) => {
  nameLogs.value.push(`从 "${oldVal}" 变为 "${newVal}"`)
})

// 2. 侦听多个数据（组合成数组）
const x = ref(0)
const y = ref(0)
watch([x, y], ([newX, newY], [oldX, oldY]) => {
  console.log(`坐标变化：(${oldX}, ${oldY}) → (${newX}, ${newY})`)
})

// 3. 深度 watch
const user = reactive({
  name: '张帅',
  info: {
    age: 25
  }
})
const deepLogs = ref([])
watch(
  () => user,
  (newVal, oldVal) => {
    deepLogs.value.push(`用户信息发生变化：${JSON.stringify(newVal)}`)
  },
  { deep: true }
)

// 4. immediate + 模拟搜索建议
const search = ref('')
const suggestion = ref('')
watch(
  search,
  (newVal) => {
    suggestion.value = newVal ? `你可能想搜索 "${newVal}..."` : ''
  },
  { immediate: true }
)
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
input {
  margin: 8px 8px 8px 0;
  padding: 6px;
  font-size: 14px;
}
button {
  margin-top: 10px;
  padding: 6px 12px;
}
ul {
  padding-left: 20px;
  list-style-type: disc;
}
</style>