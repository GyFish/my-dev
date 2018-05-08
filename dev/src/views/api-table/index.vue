<template>
  <div class="app-container">

    <!-- 添加按钮 -->
    <div class="bt-add-container">
      <el-button
        circle
        icon="el-icon-plus"
        type="primary"
        size="mini"
        @click="dialogVisible = true"
      >
      </el-button>
    </div>

    <!-- 表格 -->
    <tree-table :data="list">
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="负责人" prop="owner"></el-table-column>
      <el-table-column width="200" align="right">
        <template slot-scope="scope">
          <el-button 
            circle
            icon="el-icon-search"
            size="mini"
            type="success"
            @click="handleCat(scope.row)"
            v-if="scope.row.pid"
          >
          </el-button>
          <el-button 
            circle
            icon="el-icon-edit"
            size="mini"
            type="primary"
            @click="handleEdit(scope.row)"
            v-if="scope.row.pid"
          >
          </el-button>
          <el-button 
            circle
            icon="el-icon-delete"
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
    </tree-table>

    <!-- 表单 -->
    <el-dialog
      title="添加新的接口"
      :visible.sync="dialogVisible"
      width="30%">

      <el-form :model="apiModel">
        <el-form-item label="id">
          <el-input v-model="apiModel.id"></el-input>
        </el-form-item>
        <el-form-item label="父id">
          <el-input v-model="apiModel.pid"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="apiModel.name"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="apiModel.owner"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitApi()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import treeTable from '@/components/TreeTable'
import ApiService from '@/api/api'

const apiService = new ApiService()

export default {

  name: 'Api',
  components: { treeTable },
  
  data() {
    return {
      dialogVisible: false,
      args: [null, null, 'timeLine'],
      list: [
        {
          event: '用户管理',
          comment: '无',
          children: [
            {
              id: 2,
              event: '增加',
              comment: '无'
            },
            {
              id: 2,
              event: '删除',
              comment: '无'
            },
          ]
        },
        {
          event: '事件1',
          comment: '无',
          children: [
            {
              id: 2,
              event: '事件2',
              comment: '无'
            },
          ]
        },
    ],
    apiModel: {
      id: '',
      pid: '',
      name: '',
      owner: '',
    }
    }
  },

  methods: {

    message(row) {
      this.$message.info(row.name)
    },

    // 创建
    submitApi() {
      console.log('add api...')
      let api = JSON.stringify(this.apiModel)
      // 调用api
      apiService.addApi(api).then(res => {
        console.log(res)
        this.dialogVisible = false
      })
    },

    // 查看
    handleCat(row) {
      console.log(row)
      const id = row.pid + '.' + row.id
      this.$router.push({
        path: '/api/ui',
        query: { id }
      })
    },

    // 删除
    handleDelete(row) {
      console.log(row)
    },

    // 修改
    handleEdit(row) {
      console.log(row)
      const id = row.pid + '.' + row.id
      this.$router.push({
        path: '/api/editor',
        query: { id }
      })
    }

  },

  async mounted() {
    console.log('mounted...')
    let res = await apiService.getApiList()
    this.list = res.data
  }
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bt-add-container {
  margin-bottom: 10px;
  text-align: right;
}
</style>
