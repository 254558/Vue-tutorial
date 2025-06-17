<template>
  <div class="p-4">
    <h2>响应式基础演示</h2>

    <section class="mt-4">
      <h3>ref 示例</h3>
      <p>count: {{ count }}</p>
      <button @click="incrementCount">增加 count</button>
    </section>

    <section class="mt-4">
      <h3>reactive 示例</h3>
      <p>name: {{ person.name }}</p>
      <p>age: {{ person.age }}</p>
      <button @click="changeName">更改名字</button>
      <button @click="increaseAge">年龄 +1</button>
    </section>

    <section class="mt-4">
      <h3>计算属性</h3>
      <p>{{ greeting }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// 使用 ref 创建基本类型的响应式数据
const count = ref(0)
function incrementCount() {
  count.value++
}

// 使用 reactive 创建对象类型的响应式数据
const person = reactive({
  name: '小明',
  age: 18
})

function changeName() {
  person.name = person.name === '小明' ? '小红' : '小明'
}

function increaseAge() {
  person.age++
}

// computed 示例
const greeting = computed(() => {
  return `你好，${person.name}，你今年 ${person.age} 岁了！`
})
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
button {
  margin-right: 10px;
  padding: 5px 10px;
}
</style>