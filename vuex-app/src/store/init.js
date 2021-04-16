import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementPlus(state, payload) {
            state.counter = state.counter + payload
        }
    },
    actions: {
        incrementAsync({commit, state}, payload) {

            console.log(`counter before change: ${state.counter}`)
            setTimeout(() => {
                commit('incrementPlus', payload)
            }, 2000);

        }
    }
})