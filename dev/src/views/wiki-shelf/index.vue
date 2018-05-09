<template>
<div class="app-container">


  <!-- button group -->
  <div class="bt-add-container">
    <el-button 
      class="el-icon-plus" 
      type="primary" 
      size="mini"
      @click="handleAdd"
      circle>
    </el-button>
  </div>

  <!-- books shelf -->
  <div>
    <el-card class="card">
      <el-button 
        type="text" 
        @click="handleRead"
      >
      <img :src="demoBook" width="100%">
      </el-button>
        编程语言
    </el-card>
  </div>

</div>
</template>

<script>
import demoBook from '@/assets/my/gnar.jpg'

export default {

  name: "Wiki-Shelf",

  data() {
    return {
      demoBook
    }
  },

  methods: {
    handleAdd() {
    },
    handleRead() {
      this.$router.push('/wiki/book')
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bt-add-container {
  margin-bottom: 10px;
  text-align: right;
}
.card {
  width: 300px;
  height: 340px;
  text-align: center;
}
</style>

