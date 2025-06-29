<template>
  <div class="p-6">
    <h1>组件基础示例</h1>

    <!-- 1. 使用组件并传递 props -->
    <GreetingMessage name="张帅" />

    <!-- 2. 使用 emit 接收事件 -->
    <LikeButton @like="handleLike" />

    <!-- 3. 使用插槽 -->
    <Card>
      <template #header>
        <h2>我是卡片的标题</h2>
      </template>
      <p>我是插槽中的内容</p>
      <template #footer>
        <small>我是底部信息</small>
      </template>
    </Card>
  </div>
</template>

<script setup>
import GreetingMessage from './GreetingMessage.vue'
import LikeButton from './LikeButton.vue'
import Card from './Card.vue'

function handleLike() {
  alert('你点击了喜欢按钮！')
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
</style>