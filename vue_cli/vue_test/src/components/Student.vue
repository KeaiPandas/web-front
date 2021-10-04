<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生名称： {{ name }}</h2>
    <h2>学生性别： {{ sex }}</h2>
    <h2>学生年龄： {{ myAge }}</h2>
    <button @click="changeAge">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      msg: '我是有个帅比',
      myAge:this.age
    }
  },
  methods: {
    changeAge() {
      this.myAge++
    }
  },
  props: ['name','age','sex'] //简单接收
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }


  //接受的同时对数据：进行类型限制+默认值的指定+必要性的限制
  // props:{
  //   name:{
  //     type:String,  //name得类型是字符串
  //     required:true //name是必要的
  //   },
  //   age:{
  //     type:Number,
  //     default:99
  //   },
  //   sex:{
  //     type:String,
  //     required:true
  //   }
}
</script>
