<template>
  <div>
    <h1>Props 示例演示</h1>
    <GreetingCard name="张三" :age="18" />
    <GreetingCard name="李四" />
    <GreetingCard />
  </div>
</template>

<script setup>
import GreetingCard from './components/GreetingCard.vue'
</script>