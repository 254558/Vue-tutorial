<template>
  <div class="p-4">
    <h1>列表渲染示例</h1>

    <!-- 1. 遍历数组 -->
    <h2>遍历数组</h2>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ index + 1 }}. {{ item.name }}
      </li>
    </ul>

    <!-- 2. 遍历对象 -->
    <h2>遍历对象</h2>
    <ul>
      <li v-for="(value, key, index) in user" :key="key">
        {{ index }} - {{ key }}: {{ value }}
      </li>
    </ul>

    <!-- 3. 嵌套循环 -->
    <h2>嵌套循环</h2>
    <div v-for="(group, groupIndex) in groups" :key="groupIndex">
      <h3>组 {{ groupIndex + 1 }}</h3>
      <ul>
        <li v-for="(member, memberIndex) in group.members" :key="memberIndex">
          {{ member }}
        </li>
      </ul>
    </div>

    <!-- 4. v-for 与 v-if 一起使用（推荐写法） -->
    <h2>未完成的任务（推荐写法）</h2>
    <ul>
      <li v-for="todo in activeTodos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 数组
const items = ref([
  { id: 1, name: '苹果' },
  { id: 2, name: '香蕉' },
  { id: 3, name: '橙子' }
])

// 对象
const user = ref({
  name: '张帅',
  age: 25,
  job: '前端开发'
})

// 嵌套数组
const groups = ref([
  {
    members: ['Alice', 'Bob']
  },
  {
    members: ['Charlie', 'Dave']
  }
])

// 任务列表
const todos = ref([
  { id: 1, text: '学习 Vue', done: false },
  { id: 2, text: '写作业', done: true },
  { id: 3, text: '跑步', done: false }
])

// 推荐方式：先计算过滤后的列表
const activeTodos = computed(() => {
  return todos.value.filter(todo => !todo.done)
})
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
ul {
  padding-left: 20px;
  list-style-type: disc;
}
h3 {
  margin-top: 10px;
  font-size: 16px;
}
</style>