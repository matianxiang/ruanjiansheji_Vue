import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

const app = createApp(App)
app.config.globalProperties.$basePath = 'http://localhost:5200'

/**
 * //封装axios方法,为不需要登录操作时使用
 * @param options 配置
 */
// 
const Axios = (options: any) => {
  axios({
    url: options.url,
    method: options.method || 'POST',
    data: options.data,
    params: options.data,
  })
    .then((result) => {
      if (options.success) options.success(result.data)
    })
    .catch((err) => {
      const msg = err.response ? err.response.data : '请求异常' //如果后台没有返回错误数据 即err.response.data为空
      if (options.error) {
        options.error(msg)
        ElMessage.error({ message: msg, offset: 150 })
      } else {
        ElMessage.error({ message: msg, offset: 150 })
      }
    })
}

app.config.globalProperties.$Axios = Axios


app.use(ElementPlus).mount('#app')
