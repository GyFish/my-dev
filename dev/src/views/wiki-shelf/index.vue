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
  <el-col :span="8" v-for="book of booList" :key="book.id">

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
        <img :src="book.cover" height="256px">
      </el-button>
      <div>
        <el-button round size="mini" type="primary" icon="el-icon-zoom-in" @click="handleRead(book.id)">
        </el-button>
        <el-button round size="mini" type="success" icon="el-icon-edit" @click="handleGet(book.git)">
        </el-button>
        <el-button round size="mini" type="danger" icon="el-icon-delete" @click="deleteBook(book.id)">
        </el-button>
        <el-button round size="mini" type="warning" icon="el-icon-refresh" @click="handleBuild(book.id)">
        </el-button>
      </div>
    </el-card>

  </el-col>
  </el-row>

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
    handleRead(id) {
      console.log('read id =', id)
      this.$router.push(`/wiki/book?id=${id}`)
    },
    handleGet(git) {
      this.$message.info(git)
    },
    async handleBuild(id) {
      this.$message.info(await wikiService.buildBook(id))
    },
    async deleteBook(id) {
      this.$message.info(await wikiService.deleteBook(id))
      await this.getBookList()
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

