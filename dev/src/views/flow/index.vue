<template>
<div class="app-container">

  <h1>it's a flow in stack</h1>

  <el-row>
    <el-col :span="6">
      <div ref="left" class="left container">
        <h2>Frames</h2>
        <div v-for="(item, index) of base" :key="index">
          <el-button>{{item}}</el-button>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div ref="right" class="container">
        <h2>Stack</h2>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="container">
        <h2>Deal</h2>
        <el-form>
            <el-input placeholder="名称"></el-input>
            <el-select placeholder="类型">
            </el-select>
            <el-select placeholder="处理人">
            </el-select>
            <el-select placeholder="提交至">
            </el-select>
            <el-select placeholder="流转至">
            </el-select>
            <el-select placeholder="驳回至">
            </el-select>
            <el-select placeholder="是否暂存">
            </el-select>
        </el-form>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="container">
        <h2>Data</h2>
        {{this.base}}
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import Dragula from 'dragula'
import 'dragula/dist/dragula.css'

// dragula 实例
let drake = {}

export default {
  
  name: 'flowStack',

  data() {
    return {
      // 可选帧
      base: [
        '开始',
        '填写',
        '审核',
        '结束',
      ],
      // 流程栈
      stack: [

      ],
      // 帧
      frame: {
        name: '',
        type: '',
        handler: '',
        commitFlag: true,
        stashFlag: true,
        flowFlag: true,
        regectFlag: true,
      }
    }
  },

  methods: {
    nodeDeal(item) {
      console.log('node deal...')
      console.log(item)
    }
  },

  created () {
  },

  mounted() {

    console.log('mounted...')

    drake = Dragula([
        this.$refs.left, 
        this.$refs.right,
      ], {
      direction: 'horizontal',
      copy(el, source) {
        return source.className.startsWith('left')
      },
      accepts(el, source) {
        return !source.className.startsWith('left')
      },
      removeOnSpill() {
        return !source.className.startsWith('left')
      },
      moves(el, source, handle, sibling) {

        if (source.className.startsWith('left'))
          return true
          
        console.log('moves...')
        return true
      }
    })

  }
}
</script>

<style scoped>
.container {
  height: 600px;
  width: 90%;
  padding: 2%;
  background-color: beige;
  text-align: center;
}
.el-button, .el-input, .el-select {
  width: 95%;
  margin-top: 2%;
}
</style>
