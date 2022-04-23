<template>
    <div class="container">
        <h3 class="title">4 加密</h3>
        <el-input
        v-model="mingwen"
        class="w-50 m-2"
        size="large"
        placeholder="输入明文"
      />
      <el-input
        v-model="miyue"
        class="w-50 m-2"
        size="large"
        style="margin-top:10px"
        placeholder="输入密钥"
      />
      <div style="margin-top: 10px;">
          <el-button type="primary" @click="toCode">生成密文</el-button>&nbsp;&nbsp;<span>: &nbsp;&nbsp;&nbsp;{{miwen}}</span>
      </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const mingwen = ref('')
const miyue = ref('')
const miwen  = ref('')
const toCode = ()=>{
    const l = miyue.value.length;  //获取密钥的长度
    const a = miyue.value.split("");  //把密钥字符串转换为字符数组
    let s = ""
    let b, b1, b2, b3;  //定义临时变量
    for (let i = 0; i < mingwen.value.length; i++) {  //遍历字符串
        b = mingwen.value.charCodeAt(i);  //逐个提取每个字符，并获取Unicode编码值
        b1 = b % l;  //求Unicode编码值得余数
        b = (b - b1) / l;  //求最大倍数
        b2 = b % l;  //求最大倍数的于是
        b = (b - b2) / l;  //求最大倍数
        b3 = b % l;  //求最大倍数的余数
        s += a[b3] + a[b2] + a[b1];  //根据余数值映射到密钥中对应下标位置的字符
    }
    miwen.value = s
}
  
</script>
<style lang="scss" scoped></style>