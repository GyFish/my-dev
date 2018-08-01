<template>
<div class="app-container">

  <!-- button group -->
  <div class="bt-add-container">
    <el-button 
      class="el-icon-close" 
      type="danger" 
      @click="handleBack"
      size="mini"
      circle
    >
    </el-button>
  </div>

  <div id="ui"></div>

</div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
// import 'swagger-ui-themes/themes/3.X/theme-flattop.css'
/**
  theme-feeling-blue
  theme-flattop
  theme-material
  theme-monokai
  theme-muted
  theme-newspaper
  theme-outline
 */

export default {

  name: 'Api-UI',

  methods: {

    handleBack() {
      this.$router.push('/api/table')
    },

    getQuery() {
      console.log(this.$route.query)
      return this.$route.query
    },

  },

  mounted() {
    this.getQuery()
    SwaggerUI({
      dom_id: '#ui',
      docExpansion: 'none',
      url: "http://127.0.0.1:7001/public/api/user.find.yaml",
    })
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bt-add-container {
  margin-bottom: 10px;
  text-align: right;
}
</style>
