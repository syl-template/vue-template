import Vue from "vue"
import Vuex from "vuex"
import modules from "./modules"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules,
})

// console.log(store.module)
export default store;

// 使用
    // console.log(this.$store.commit('module1/changeModule1','asdf'))
    // console.log(this.$store.state.module1.moudle1Value)
    // console.log(this.$store.dispatch("module1/useActionChangeModule1"));