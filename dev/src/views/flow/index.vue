<template>
<div>

  <h1>it's a demo</h1>

  <el-row>
    <el-col :span="12">
      <div class="container" v-dragula="colOne" drake="first">
        <div class="item" v-for="text in colOne" :key="text">
          <el-button class="btn">
            {{text}}
          </el-button>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="container" v-dragula="colTwo" drake="first">
        <div class="item" v-for="text in colTwo" :key="text">
          <el-button class="btn">
            {{text}}
          </el-button>
        </div>
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import Vue from 'vue'
import { Vue2Dragula } from 'vue2-dragula'
import 'dragula/dist/dragula.css'

Vue.use(Vue2Dragula, {
  logging: {
    service: true // to only log methods in service (DragulaService)
  }
});

export default {
  
  name: 'LightFlow',

  data() {
    return {
      colOne: [
        '填写',
        '审核',
        '结束',
      ],
      colTwo: [
        '开始'
      ],
    }
  },

  created () {
    const service = Vue.$dragula.$service
    service.options('my-drake', {
      direction: 'vertical'
    })
  }
}
</script>

<style scoped>
.wrapper {
  /* background-color: antiquewhite; */
  padding: 10%;
}
.container {
  margin-top: 5%;
  background-color: aquamarine;
  text-align: center;
  padding: 1%;
}
.btn {
  width: 100%;
}
</style>
