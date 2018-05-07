<template>
<div>

  <div id="editor"></div>

</div>
</template>

<script>
import SwaggerEditorBundle from 'swagger-editor-dist/swagger-editor-bundle'
import SwaggerEditorStandalonePreset from 'swagger-editor-dist/swagger-editor-standalone-preset'
import 'swagger-editor-dist/swagger-editor.css'

export default {
  name: 'Api-Editor',
  mounted() {
    // Build a system
    SwaggerEditorBundle({
      dom_id: '#editor',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerEditorStandalonePreset
      ],
      url: "http://127.0.0.1:7001/public/user.yaml",
    })
  }
}
</script>
