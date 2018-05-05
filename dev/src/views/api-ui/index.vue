<template>
<div>

  <div id="ui"></div>

</div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui-themes/themes/3.X/theme-flattop.css'
/**
  theme-feeling-blue
  theme-flattop
  theme-material
  theme-monokai
  theme-muted
  theme-newspaper
  theme-outline
 */

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
