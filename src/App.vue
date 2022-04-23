<template>
  <div class="App">
    <h2 class="name">软件设计</h2>
    <h4 class="student">学号：B19022107&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名：马天翔 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术栈: Vue.js+TypeScript</h4>
    <StaicScore />
    <TypeWrite />
    <FuWenBen />
    <MiYue />
    <BinaryConversion />
    <Student />
  </div>
</template>

<script lang="ts" setup>
import StaicScore from './components/StaicScore.vue'
import TypeWrite from './components/TypeWrite.vue'
import FuWenBen from './components/FuWenBen.vue'
import MiYue from './components/MiYue.vue'
import BinaryConversion from './components/BinaryConversion.vue'
import Student from './components/Student.vue'

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.App {
  width: 724px;
  margin: 0 auto;
  h2,
  h4 {
    text-align: center;
  }
}
</style>
