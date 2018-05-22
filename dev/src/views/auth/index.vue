<template>
<div class="app-container">

  <el-row>

    <el-col :span="8">
      <el-table
        ref="singleTableA"
        :data="tableDataA"
        tooltip-effect="dark"
        highlight-current-row
        @current-change="handleCurrentChangeA"
        style="width: 100%">
        <el-table-column
          v-if="selectA"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户"
          width="120">
        </el-table-column>
      </el-table>
    </el-col>

    <el-col :span="3">
      <el-button circle icon="el-icon-refresh" @click="refresh"></el-button>
    </el-col>

    <el-col :span="8">
      <el-table
        ref="singleTableB"
        :data="tableDataB"
        tooltip-effect="dark"
        highlight-current-row
        @current-change="handleCurrentChangeB"
        style="width: 100%">
        <el-table-column
          type="selection"
          v-if="selectB"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="权限"
          width="120">
        </el-table-column>
      </el-table>
    </el-col>

  </el-row>




  
</div>
</template>

<script>
export default {
  name: 'Auth',

  data() {
    return {
      tableDataA: [{
        name: 'A',
      }, {
        name: 'B',
      }],
      tableDataB: [{
        name: 'admin',
      }, {
        name: 'role',
      }],
      selectA: false,
      selectB: false,
      multipleSelection: []
    }
  },

  methods: {
    handleCurrentChangeA(val) {
      console.log('handleCurrentChangeA')
      this.$refs.singleTableA.currentRow = val
      if (val) {
        this.selectA = false
        this.cleanB()
      }
    },
    handleCurrentChangeB(val) {
      console.log('handleCurrentChangeB')
      this.$refs.singleTableB.currentRow = val
      if (val) {
        this.selectB = false
        this.cleanA()
      }
    },
    cleanA() {
      this.selectA = true
      this.$refs.singleTableA.setCurrentRow()
    },
    cleanB() {
      this.selectB = true
      this.$refs.singleTableB.setCurrentRow()
    },
    refresh() {
      console.log('refresh...')
      this.selectA = false
      this.selectB = false
      this.$refs.singleTableA.setCurrentRow()
      this.$refs.singleTableB.setCurrentRow()
    }
  }
}
</script>
