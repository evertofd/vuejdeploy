<template>
  <div class="about">
    <h1>Bienvenido {{ $store.state.nombre }}</h1>
    <p>{{ valorDobleStore }}</p>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  computed: {
    valorDobleStore() {
      return this.$store.getters.valorDoble;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>