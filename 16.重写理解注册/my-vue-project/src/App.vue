<template>
  <div class="app">
    <h1>组件注册示例（Vue 3）</h1>

    <!-- 使用全局注册的组件 -->
    <HelloWorld msg="我是全局注册的组件" />

    <!-- 使用局部注册的组件 -->
    <LocalOnly />
  </div>
</template>

<script>
import LocalOnly from './components/LocalOnly.vue'

export default {
  name: 'App',
  components: {
    LocalOnly // ✅ 局部注册
  }
}
</script>

<style scoped>
.app {
  font-family: sans-serif;
  padding: 1rem;
}
</style>