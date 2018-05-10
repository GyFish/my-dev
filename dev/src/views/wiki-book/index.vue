<template>
<div class="app-container">
  
  <!-- button group -->
  <div class="bt-add-container">
    <el-button 
      class="el-icon-close" 
      type="danger" 
      size="mini"
      @click="handleBack"
      circle>
    </el-button>
  </div>
  
  <iframe src="http://localhost:7001/public/wiki/_book/index.html" 
    frameborder="0"
    height="900px"
    width="100%"
  ></iframe>
</div>
</template>

<script>
export default {
  name: "Wiki-Book",

  methods: {
    handleBack() {
      this.$router.push('/wiki/shelf')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bt-add-container {
  margin-bottom: 10px;
  text-align: right;
}
</style>

