<template>
  <div class="home">
    <h1>Bienvenido {{ $store.state.nombre }}</h1>
    <p>{{ $store.state.valor }}</p>
    <input type="number" v-model="numero" />
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      numero: 0,
    };
  },
  methods: {
    incrementar() {
      // this.$store.state.valor += 1
      const payload = {
        numero1: this.numero,
        numero2: 2,
      };
      this.$store.commit("incrementarValor", payload);
    },
  },
  created () {
    this.$store.dispatch("incrementadorInicial");
  },
};
</script>
