<template>
  <div>
    <i
      @click="toggleClick" 
      class="el-icon-menu hamburger" 
      :class="{'is-active':isActive}" 
      >
    </i>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: true
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
  color: blueviolet;
  display: inline-block;
  cursor: pointer;
  width: 20px;
  height: 20px;
  transform: rotate(0deg);
  transition: .38s;
  transform-origin: 50% 50%;
}

.hamburger.is-active {
  transform: rotate(90deg);
}
</style>
