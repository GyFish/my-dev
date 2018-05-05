<template>
  <div class="app-container">
    
    <tree-table :data="data">
      <el-table-column label="名称" prop="event"></el-table-column>
      <el-table-column label="负责人" prop="comment"></el-table-column>
      <el-table-column label="时间" prop="comment"></el-table-column>
      <el-table-column width="200" align="right">
        <template slot-scope="scope">
          <el-button 
            circle
            icon="el-icon-search"
            size="mini"
            type="success"
            @click="message(scope.row)"
          >
          </el-button>
          <el-button 
            circle
            icon="el-icon-edit"
            size="mini"
            type="primary"
            @click="message(scope.row)"
          >
          </el-button>
          <el-button 
            circle
            icon="el-icon-delete"
            size="mini"
            type="danger"
            @click="message(scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
    </tree-table>

    <div class="bt-add-container">
      <el-button
        icon="el-icon-circle-plus"
        type="warning"
      >
        添加
      </el-button>
    </div>

  </div>
</template>

<script>
import treeTable from '@/components/TreeTable'

export default {
  name: 'Api',
  components: { treeTable },
  data() {
    return {
      data:
        [
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
      args: [null, null, 'timeLine']
    }
  },
  methods: {
    message(row) {
      this.$message.info(row.event)
      this.$router.push('/home')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bt-add-container {
  margin: 30px;
  text-align: right;
}
</style>
