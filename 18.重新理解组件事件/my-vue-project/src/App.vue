<template>
  <div>
    <h1>自定义事件（Emits）示例</h1>
    <CounterButton @increment="handleIncrement" />
    <p>总点击次数：{{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CounterButton from './components/CounterButton.vue'

const count = ref(0)

function handleIncrement(value) {
  count.value += value
}
</script>