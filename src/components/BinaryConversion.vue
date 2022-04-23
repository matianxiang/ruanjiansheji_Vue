<template>
  <div class="container">
    <h3 class="title">5 进制转换器</h3>
    <el-radio-group v-model="radio">
    <el-radio :label="2" border>二进制</el-radio>
    <el-radio :label="4" border>四进制</el-radio>
    <el-radio :label="8" border>八进制</el-radio>
    <el-radio :label="10" border>十进制</el-radio>
    <el-radio :label="16" border>十六进制</el-radio>
  </el-radio-group>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:10px">
      <el-form-item label="输入要转换的数">
        <el-input v-model="formInline.number" placeholder="" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">转换</el-button>
      </el-form-item>
    </el-form>
    <div class="answer">
        <div>二进制: &nbsp;&nbsp;{{To2}}</div>
        <div>四进制: &nbsp;&nbsp;{{To4}}</div>
        <div>八进制: &nbsp;&nbsp;{{To8}}</div>
        <div>十六进制: &nbsp;&nbsp;{{To16}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive,ref } from 'vue'

const formInline = reactive({
    number: ''
})

const To2 = ref('')
const To4 = ref('')
const To8 = ref('')
const To16 = ref('')
const onSubmit = () => {
  console.log(radio.value)
  To2.value = parseInt(formInline.number,radio.value).toString(2)
  To4.value = parseInt(formInline.number,radio.value).toString(4)
  To8.value = parseInt(formInline.number,radio.value).toString(8)
  To16.value = parseInt(formInline.number,radio.value).toString(16)
}
const radio = ref(2)
</script>
<style lang="scss" scoped>
.container{
    .answer{
        display: flex;
        flex-direction: row;
        
        div{
            width: 25%;
        }
    }
}
</style>
