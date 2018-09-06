<template>
<div class="app-container">
  <iframe
    id="iframe-demo"
    src="https://www.baidu.com"
    frameborder="0"
    width="100%"
  ></iframe>
</div>
</template>

<script>

window.onresize = function() {
  console.log(window.innerHeight)
  document.getElementById('iframe-demo').height = window.innerHeight - 25
}

export default {

  data() {
    return {};
  },

  methods: {
  },

  mounted() {

    document.getElementById('iframe-demo').height = window.innerHeight - 25
  }
  
};
</script>
