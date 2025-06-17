<template>
  <div class="p-4">
    <h1>条件渲染示例</h1>

    <!-- 1. v-if / v-else-if / v-else -->
    <div>
      <h2>v-if / v-else-if / v-else 示例</h2>
      <button @click="changeStatus">切换状态</button>
      <p v-if="status === 'loading'">加载中...</p>
      <p v-else-if="status === 'success'">加载成功！🎉</p>
      <p v-else>加载失败，请重试。</p>
    </div>

    <hr />

    <!-- 2. v-show 示例 -->
    <div>
      <h2>v-show 示例</h2>
      <label>
        <input type="checkbox" v-model="showDetails" />
        显示详情
      </label>
      <p v-show="showDetails">这里是一些额外的详情内容。</p>
    </div>

    <hr />

    <!-- 3. 使用 template 包裹多个 v-if 元素 -->
    <div>
      <h2>使用 &lt;template&gt; 包裹多个元素</h2>
      <template v-if="isLoggedIn">
        <p>欢迎回来，用户！</p>
        <button @click="logout">退出登录</button>
      </template>
      <template v-else>
        <p>请先登录以继续。</p>
        <button @click="login">登录</button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 用于 v-if / v-else-if / v-else
const status = ref('loading')
const statusOptions = ['loading', 'success', 'error']
let index = 0
function changeStatus() {
  index = (index + 1) % statusOptions.length
  status.value = statusOptions[index]
}

// 用于 v-show
const showDetails = ref(false)

// 用于 template 条件渲染
const isLoggedIn = ref(false)
function login() {
  isLoggedIn.value = true
}
function logout() {
  isLoggedIn.value = false
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
hr {
  margin: 24px 0;
  border: none;
  border-top: 1px solid #ccc;
}
</style>