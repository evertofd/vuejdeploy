import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valor:0,
    nombre:"everto"
  },
  getters: {
    valorDoble:(state)=>{
      return state.valor * 2
    }
  },
  mutations: {
    incrementarValor:(state,payload) =>{
      state.valor = payload.numero1;
    },
    actulizarNombre:(state) =>{
      state.nombre = "Lissett"
    }
  },
  // Nos permiten ejecutar procesos asincronos
  actions: {
    incrementadorInicial:(context)=>{
      console.log(context)
      setTimeout(()=>{
        const payload={
          numero1: 10,
          numero2:20
        }
        context.commit("incrementarValor",payload)
      },5000)
    }
  }
})
