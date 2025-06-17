<template>
  <div class="card">
    <header>
      <slot name="header">默认标题</slot>
    </header>
    <main>
      <slot>默认内容</slot>
    </main>
    <footer>
      <slot name="footer">默认底部</slot>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-top: 16px;
  border-radius: 6px;
}
header, footer {
  background: #f5f5f5;
  padding: 6px;
}
</style>