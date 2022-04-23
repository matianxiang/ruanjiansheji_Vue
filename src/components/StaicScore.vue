<template>
  <div class="container">
    <hr />
    <h3 class="title">1 统计分数</h3>
    <div class="table">
      <el-table
        :data="tableData"
        :default-sort="{ prop: 'score', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="sex" label="Sex" width="180" />
        <el-table-column prop="score" label="Score" sortable />
      </el-table>
    </div>
    <div class="addStudent">
      <el-popover placement="left" :width="400" trigger="click">
        <template #reference>
          <el-button style="" type="primary">Add Student</el-button>
        </template>
        <div style="margin: 20px" />
        <el-form
          label-position="right"
          label-width="60px"
          :model="formLabelAlign"
          style="max-width: 460px"
        >
          <el-form-item label="Name">
            <el-input v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item label="Sex">
            <el-input v-model="formLabelAlign.sex" />
          </el-form-item>
          <el-form-item label="Score">
            <el-input v-model="formLabelAlign.score" />
          </el-form-item>
        </el-form>
        <el-button style="margin-left: 320px" type="primary" @click="add">
          Added
        </el-button>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
interface User {
  name: string
  sex: string
  score: number
}

const tableData: User[] = reactive([
  {
    name: 'Jony',
    sex: '男',
    score: 78
  },
  {
    name: 'Yudy',
    sex: '女',
    score: 100
  },
  {
    name: 'Pete',
    sex: '男',
    score: 88
  },
  {
    name: 'Robbor',
    sex: '男',
    score: 92
  }
])
const formLabelAlign: User = reactive({
  name: '',
  sex: '',
  score: 60
})

const add = () => {
  tableData.push(formLabelAlign)
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .addStudent {
    position: absolute;
    right: 0;
    top: 25px;
  }
}
</style>
