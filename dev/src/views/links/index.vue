<template>
<div class="app-container">
  
  <!-- links -->
  <div>
    <el-card class="card">
      <div>
        <el-button 
          type="text" 
          @click="window.open('http://gitlab.my:9099/users/sign_in')"
        >
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3589196393,409579588&fm=27&gp=0.jpg">
        </el-button>
      </div>
    </el-card>
    <el-card class="card">
      <div>
        <el-button 
          type="text" 
          @click="open('http://panjiachen.github.io/vue-element-admin/#/login')"
        >
          <img src="https://camo.githubusercontent.com/e3c9c7c71a80f21050c6e32577b97660175b9fe7/68747470733a2f2f7770696d672e77616c6c7374636e2e636f6d2f65636335336134322d643739622d343265322d383835322d3531323662383130613463382e737667">
        </el-button>
      </div>
    </el-card>
    <el-card class="card">
      <div>
        <el-button 
          type="text" 
          @click="open('http://eggjs.org/zh-cn/intro/')"
        >
          <img src="https://zos.alipayobjects.com/rmsportal/VTcUYAaoKqXyHJbLAPyF.svg">
        </el-button>
      </div>
    </el-card>
    <el-card class="card">
      <div>
        <el-button 
          type="text" 
          @click="open('http://element.eleme.io/#/zh-CN')"
        >
          <img src="http://element.eleme.io/static/guide.0a8462c.png">
        </el-button>
      </div>
    </el-card>
    <el-card class="card">
      <div>
        <el-button 
          type="text" 
          @click="this.window.open('http://zentao.my/zentao')"
        >
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526535893&di=d0167731ac3b9ee0e51b50eb0c886ee7&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.wanhuajing.com%2Fpic%2F1604%2F1309%2F5613405%2F5_497_162.jpg">
        </el-button>
      </div>
    </el-card>
    <el-card class="card">
      <div>
        <el-button 
          type="text" 
          @click="this.window.open('https://github.com/bevacqua/dragula')"
        >
          <img src="https://github.com/bevacqua/dragula/raw/master/resources/logo.png">
        </el-button>
      </div>
    </el-card>
  </div>
  
</div>
</template>

<script>
export default {

  name: 'Links',

  methods: {
    open(url) {
      window.open(url)
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  height: 150px;
  text-align: center;
  margin-bottom: 20px;
}
.card img {
  height: 90px;
}
</style>
