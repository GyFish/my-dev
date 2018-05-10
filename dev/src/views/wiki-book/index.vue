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
  
  <!-- gitbook -->
  <iframe :src="bookUrl" 
    frameborder="0"
    height="900px"
    width="100%"
  ></iframe>

</div>
</template>

<script>
export default {

  name: "Wiki-Book",

  data() {
    return {
      bookUrl: 'http://localhost:7001/public/wiki/demo/_book/index.html'
    }
  },

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

