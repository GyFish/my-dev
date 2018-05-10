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
      <div>
        <span>
          纳尔的回旋镖
        </span>
      </div>
      <el-button 
        type="text" 
        @click="handleRead"
      >
        <img :src="demoBook" width="100%">
      </el-button>
      <div>
        <el-button size="mini" type="primary" @click="handleRead">
          Read
        </el-button>
        <el-button size="mini" type="success" @click="handleGet">
          Get
        </el-button>
        <el-button size="mini" type="warning" @click="handleBuild">
          Build
        </el-button>
      </div>
    </el-card>
  </div>

  <!-- 弹窗 -->
  <el-dialog
    title="添加一本书"
    :visible.sync="dialogVisible"
    width="30%">

    <el-form :model="bookInfo">
      <el-form-item label="id">
        <el-input v-model="bookInfo.id"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="addBook">确 定</el-button>
    </span>
  </el-dialog>

</div>
</template>

<script>
import demoBook from '@/assets/my/gnar.jpg'

export default {

  name: "Wiki-Shelf",

  data() {
    return {
      demoBook,
      dialogVisible: false,
      bookInfo: {
        id: ''
      }
    }
  },

  methods: {
    handleAdd() {
      this.dialogVisible = true
    },
    handleRead() {
      this.$router.push('/wiki/book')
    },
    handleGet() {
      this.$message.info('http://gnar.git')
    },
    handleBuild() {
      this.$message.info('run gitbook build')
    },
    addBook() {
      this.$message.info('1.mkdir\n2.gitbook init\n3.git init')
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
  height: 380px;
  text-align: center;
}
</style>

