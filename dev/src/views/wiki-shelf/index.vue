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
  <el-row>
  <el-col :span="6" v-for="book of booList" :key="book.id">

    <el-card class="card">
      <div>
        <span>
          {{book.name}}
        </span>
      </div>
      <el-button 
        type="text" 
        @click="handleRead(book.id)"
      >
        <img :src="book.cover" width="100%">
      </el-button>
      <div>
        <el-button size="mini" type="primary" @click="handleRead(book.id)">
          Read
        </el-button>
        <el-button size="mini" type="success" @click="handleGet(book.id)">
          Get
        </el-button>
        <el-button size="mini" type="warning" @click="handleBuild(book.id)">
          Build
        </el-button>
      </div>
    </el-card>

  </el-col>
  </el-row>
  <!-- books shelf -->
  <!-- <div class="card-container">
    <el-card class="card" v-for="book of booList" :key="book.id">
      <div>
        <span>
          {{book.name}}
        </span>
      </div>
      <el-button 
        type="text" 
        @click="handleRead(book.id)"
      >
        <img :src="book.cover" width="100%">
      </el-button>
      <div>
        <el-button size="mini" type="primary" @click="handleRead(book.id)">
          Read
        </el-button>
        <el-button size="mini" type="success" @click="handleGet(book.id)">
          Get
        </el-button>
        <el-button size="mini" type="warning" @click="handleBuild(book.id)">
          Build
        </el-button>
      </div>
    </el-card>
  </div> -->

  <!-- 弹窗 -->
  <el-dialog
    title="添加一本书"
    :visible.sync="dialogVisible"
    width="30%">

    <el-form :model="bookInfo">
      <el-form-item label="id">
        <el-input v-model="bookInfo.id"></el-input>
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="bookInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="git地址">
        <el-input v-model="bookInfo.git"></el-input>
      </el-form-item>
      <el-form-item label="封面地址">
        <el-input v-model="bookInfo.cover"></el-input>
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
import WikiService from '@/api/wiki'

const wikiService = new WikiService()

export default {

  name: "Wiki-Shelf",

  data() {
    return {
      demoBook,
      dialogVisible: false,
      bookInfo: {
        id: '',
        name: '',
        git: '',
        cover: ''
      },
      booList: [{
        id: 'demo',
        name: '纳尔的回旋镖',
        git: '',
        cover: 'http://wanzao2.b0.upaiyun.com/1462088534127league_of_legends___gnarrr_by_ffsade-d7vyvqz.png'
      }]
    }
  },

  methods: {
    async getBookList() {
      this.booList = await wikiService.getBookList()
    },
    handleAdd() {
      this.dialogVisible = true
    },
    async addBook() {
      await wikiService.addBook(this.bookInfo)
      await this.getBookList()
      this.dialogVisible = false
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
  },

  mounted() {
    this.getBookList()
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
  margin: 10px;
}
.card-container {
  display: flex
}
</style>

