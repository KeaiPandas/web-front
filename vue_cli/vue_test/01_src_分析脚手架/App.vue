<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上分的dom元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
//引入School组件
import School from './components/School'
export default {
  name: 'App',
  data() {
    return{
      msg: '欢迎学习vue'
    }
  },
  components: {School},
  methods: {
    showDom() {
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      //School组件的实力对象
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style>

</style>