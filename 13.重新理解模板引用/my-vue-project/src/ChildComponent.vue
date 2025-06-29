<template>
  <div class="child-box">
    <p>我是子组件</p>
  </div>
</template>

<script setup>
function sayHello() {
  alert('子组件方法被调用了！')
}

// 暴露方法供父组件调用
defineExpose({ sayHello })
</script>

<style scoped>
.child-box {
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ccc;
}
</style>