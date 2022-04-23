<template>
  <div class="container">
    <h3 class="title">6 学生成绩核算系统的设计与实现</h3>
    <el-button type="primary" @click="readtxt">读取文件</el-button>
    <el-table :data="tableData" height="250" style="width: 100%;">
      <el-table-column prop="id" label="学号" />
      <el-table-column prop="score1" label="平时成绩"  />
      <el-table-column prop="score2" label="期中考试成绩" />
      <el-table-column prop="score3" label="期末考试成绩" />
    </el-table>
    <el-button type="primary" @click="sortScore" style="margin-top:10px">处理成绩</el-button>
    <el-table :data="sortData" height="250" style="width: 100%;">
      <el-table-column prop="id" label="学号" />
      <el-table-column prop="sum" label="总评成绩"  />
      <el-table-column prop="level" label="成绩等级" />
    </el-table>
     <el-button type="primary" @click="saveData">保存成绩</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useCurrentInstance from '../utils/proxyVue'

const txtData = ref('')
const { proxy } = useCurrentInstance()
const tableData = ref([])
const sortData = ref([])

const readtxt = () => {
  proxy.$Axios({
    url: '/readStudent',
    method: 'GET',
    success: (result: any) => {
      txtData.value = result
      console.log(txtData.value)
      //    const arr = txtData.value.split(/[\n]/)
      const arr = txtData.value.split('\r\n')
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ')
        let obj = {
          id: '',
          score1: '',
          score2: '',
          score3: ''
        }
        obj.id = arr[i][0]
        obj.score1 = arr[i][1]
        obj.score2 = arr[i][2]
        obj.score3 = arr[i][3]
        tableData.value.push(obj)
      }
      console.log(tableData.value)
      proxy.$message.success('读取成功')
    }
  })
}

const sortScore = ()=>{
   for(let i =0;i<tableData.value.length;i++){
       let obj = {
           id:'',
           sum: '',
           level: ''
       }
       obj.id = tableData.value[i].id
       obj.sum = (Number(tableData.value[i].score1)*0.3+Number(tableData.value[i].score2)*0.3+Number(tableData.value[i].score3)*0.4).toFixed(1)
       if(Number(obj.sum)<60){
           obj.level = 'E'
       }else if(Number(obj.sum)>=60&&Number(obj.sum)<70){
            obj.level = 'D'
       }else if(Number(obj.sum)>=70&&Number(obj.sum)<80){
            obj.level = 'C'
       }else if(Number(obj.sum)>=80&&Number(obj.sum)<90){
            obj.level = 'B'
       }else {
            obj.level = 'A'
       }
       sortData.value.push(obj)
   }
   console.log(sortData.value)
}

const saveData = ()=>{
    let str = ''
    for(let i = 0;i<sortData.value.length;i++){
          str += sortData.value[i].id+' '+sortData.value[i].sum+' '+sortData.value[i].level+'\r\n'
    }
    console.log(str)
    proxy.$Axios({
        url:'/saveScore',
        data: {
           content: str
        },
        method: 'POST',
        success:(result:any)=>{
            proxy.$message.success(result)
        }
    })
}
</script>

<style lang="scss" scoped></style>
