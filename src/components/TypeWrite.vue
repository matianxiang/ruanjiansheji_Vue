<template>
  <div class="container">
    <h3 class="title">2 打字程序</h3>
    <el-button style="" type="primary" @click="randomString">
      生成随机字符串
    </el-button>
    &nbsp;&nbsp;
    <span>: {{ str }}</span>
    <div class="compare">
      <el-input
        v-model="inputValue"
        class="w-50 m-2"
        size="large"
        placeholder="输入字符串进行比较"
      />
      <el-button type="primary" style="margin-top: 10px" @click="checkout">
        验证结果
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { indexOf } from 'lodash'
import { ref } from 'vue'
import useCurrentInstance from '../utils/proxyVue'
const { proxy } = useCurrentInstance()
let str = ref('Random String')
const randomString = () => {
  str.value = Math.random().toString(36).slice(-8)
}
const inputValue = ref('')

const checkout = () => {
  if (inputValue.value === str.value) {
    proxy.$message.success('结果正确: 100%')
  } else {
    let correctPercent = ''
    if (str.value.indexOf(inputValue.value)!=-1) {
      console.log(inputValue.value)
      console.log(str.value)
      correctPercent = (inputValue.value.length / str.value.length).toFixed(2)
    } else {
      correctPercent = '0'
    }
    proxy.$message.error('结果错误:' + correctPercent + '%')
  }
}
</script>
<style lang="scss" scoped>
.container {
  .compare {
    position: relative;
    margin-top: 15px;
  }
}
</style>
