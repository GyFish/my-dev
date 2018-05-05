<template>
  <div class="home-container">
    <el-card>
      <img :src="homeImg">
    </el-card>
  </div>
</template>

<script>
import homeImg from '@/assets/my/伊丽莎白和萨达哈鲁.jpg'

export default {
  name: 'home',
  data() {
    return { homeImg }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
    text-align: center;
  }
}
</style>
