<template>
<div>

  <codemirror v-model="code" :options="cmOptions"></codemirror>

</div>
</template>

<script>

// require component
import { codemirror } from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'
// language js
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/dracula.css'

export default {

  name: 'Api-Editor',

  components: {
    codemirror
  },

  data() {
    return {
      code: 'const a = 10',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'dracula',
        lineNumbers: true,
        line: true,
      }
    }
  },

  mounted() {
  }

}
</script>
