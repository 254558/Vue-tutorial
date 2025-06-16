<script setup>
import { ref, computed } from 'vue'

// 响应式数据
const message = ref('Vue 3 模板语法示例')
const count = ref(0)
const inputValue = ref('')
const list = ref([
  { id: 1, text: '学习 Vue' },
  { id: 2, text: '掌握模板语法' },
  { id: 3, text: '构建应用' }
])
const showDetails = ref(false)

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法
const increment = () => count.value++
const decrement = () => count.value--
const addItem = () => {
  if (inputValue.value.trim()) {
    list.value.push({
      id: Date.now(),
      text: inputValue.value
    })
    inputValue.value = ''
  }
}
</script>

<template>
  <div class="container">
    <!-- 基础文本插值 -->
    <h1>{{ message }}</h1>
    
    <!-- 计数显示 -->
    <p>计数: {{ count }}</p>
    <p>计数的两倍: {{ doubleCount }}</p>
    
    <!-- 计数按钮 -->
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    
    <!-- 条件渲染 -->
    <p v-if="count > 3" class="highlight">计数大于 3!</p>
    <p v-else>计数小于等于 3</p>
    
    <!-- 列表渲染 -->
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.text }}
        <button @click="list.splice(list.indexOf(item), 1)">删除</button>
      </li>
    </ul>
    
    <!-- 双向数据绑定 -->
    <input 
      v-model="inputValue" 
      placeholder="添加新项目" 
      @keyup.enter="addItem"
    >
    <button @click="addItem">添加</button>
    
    <!-- 样式绑定 -->
    <div 
      :class="{ active: count > 5 }"
      :style="{ backgroundColor: count % 2 === 0 ? '#f0f0f0' : '#e0e0ff' }"
      class="box"
    >
      背景色随计数变化
    </div>
    
    <!-- 动态组件展示 -->
    <button @click="showDetails = !showDetails">
      {{ showDetails ? '隐藏详情' : '显示详情' }}
    </button>
    
    <transition name="fade">
      <div v-show="showDetails" class="details">
        <h3>详细信息</h3>
        <p>当前计数: {{ count }}</p>
        <p>列表项数量: {{ list.length }}</p>
        <p>最后更新: {{ new Date().toLocaleTimeString() }}</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  font-family: system-ui, sans-serif;
}

.highlight {
  color: #42b883;
  font-weight: bold;
}

.box {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.active {
  border: 2px solid #42b883;
}

input, button {
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
}

.details {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>