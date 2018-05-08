<template>
<div class="app-container">

  <!-- button group -->
  <div class="bt-add-container">
    <el-button 
      class="el-icon-check" 
      type="primary" 
      size="mini"
      circle>
    </el-button>
    <el-button 
      class="el-icon-close" 
      type="danger" 
      size="mini"
      @click="handleBack"
      circle>
    </el-button>
  </div>

  <!-- code main -->
  <codemirror v-model="code" :options="cmOptions"></codemirror>

</div>
</template>

<script>

// require component
import { codemirror } from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'
// language js
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/dracula.css'

import ApiService from '@/api/api'
const apiService = new ApiService()

export default {

  name: 'Api-Editor',

  components: {
    codemirror
  },

  data() {
    return {
      code: `const a = 'hello world!'`,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'dracula',
        lineNumbers: true,
        line: true,
      }
    }
  },

  methods: {
    
    handleBack() {
      this.$router.push('/api/table')
    },

  },

  async mounted() {
    let { id } = this.$route.query
    let res = await apiService.getApi(id)
    console.log(res.data.toString())
    this.code = res.data.toString()
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bt-add-container {
  margin-bottom: 10px;
  text-align: right;
}
.vue-codemirror {
  height: 400px;
}
.CodeMirror {
    height: 400px;
    border: 1px solid rgb(14, 13, 13);
}
.CodeMirror-scroll {
    height: 400px;
    overflow-y: hidden;
    overflow-x: auto;
}
</style>
