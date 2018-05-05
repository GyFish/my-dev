<template>
<div>

  <div id="ui"></div>

</div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui-themes/themes/3.X/theme-muted.css'
// import 'element-ui/lib/theme-chalk/index.css'


export default {
  name: 'Api-UI',
  mounted() {
    SwaggerUI({
      dom_id: '#ui',
      url: "http://petstore.swagger.io/v2/swagger.json",
    })
  }
}
</script>
