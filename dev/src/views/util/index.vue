<template>
<div class="app-container">
  hello util!
</div>
</template>

<script>
import AESUtil from "./AESUtil.js"

// 密文
let cipher = "m6tfGRBGdBGpZVvk+i5JaQ=="

// 明文
let plaintext = AESUtil.decrypt(cipher)

console.log("plaintext = ", plaintext)

export default {

  name: 'Util',

  data() {
    return {
    }
  },

  methods: {
  }
}
</script>
