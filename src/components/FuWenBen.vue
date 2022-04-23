<template>
  <div class="container">
    <h3 class="title">3 文本编辑器</h3>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
    <el-button
      style="margin-left: 610px; margin-top: 10px"
      type="primary"
      @click="save"
    >
      写入txt文件
    </el-button>
  </div>
  <div class="box" style="margin-bottom: 10px;">
    <span>写入的内容:</span>
    <div v-html="txtHtml"></div>
  </div>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import useCurrentInstance from '../utils/proxyVue'



const { proxy } = useCurrentInstance()

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

const txtHtml = ref('')

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const mode = 'default'
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const save = () => {
  proxy.$Axios({
    url: '/article',
    method: 'POST',
    data: {
      content: valueHtml.value
    },
    success: (result: any) => {
      txtHtml.value = result
      proxy.$message.success('写入成功')
    }
  })
}


</script>
<style lang="scss" scoped></style>
