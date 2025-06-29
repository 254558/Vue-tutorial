<template>
  <p>你好，{{ name }}！欢迎学习 Vue 组件。</p>
</template>

<script setup>
defineProps({
  name: String
})
</script>