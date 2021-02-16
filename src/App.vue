<template>
  <Container id="app">
    <h1>Sample</h1>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
  name: "App",
  components: {
    Container
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
