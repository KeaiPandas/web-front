<template>
  <div class="student">
    <h2 @click="showName">学生名称： {{ name }}</h2>
    <h2>学生性别： {{ sex }}</h2>
  </div>
</template>

<script>
//引入一个混合
import {mixin} from '../mixin'
export default {
  name:'Student',
  data() {
    return {
      name: '帅比',
      sex:'男'
    }
  },
  mixins: [mixin]
}
</script>
