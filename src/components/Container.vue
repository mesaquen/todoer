<template>
  <div class="container"><slot /></div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
