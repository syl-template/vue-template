<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations } from "vuex";

export default {
  name: "Home",
  // components: {
  //   helloWorld
  // }
  methods: {
    ...mapMutations({
      add: "module1/getModule1" // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  },
  mounted() {
    console.log(this.add(),'add')
    // console.log(this.$store)
    // console.log(this.$store.state.module1.moudle1Value)
    // console.log(this.$store.state.module1.moudle1Value)
    console.log(this.$store.commit('module1/changeModule1','asdf'))
    console.log(this.$store.state.module1.moudle1Value)

    console.log(this.$store.dispatch("module1/useActionChangeModule1"));
    // console.log(this)
    //  this.localStorageSetItem(1,{type:"go",asf:"as"},1)
    // console.log(this.localStorageGetExpires(1))
    // console.log(this.localStorageGetItem(1))
    // console.log(this.isExpires(1))
  }
};
</script>
