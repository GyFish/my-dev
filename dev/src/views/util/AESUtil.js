import CryptoJS from 'crypto-js';

const key = "1qaz2wsx3edc4rfv"
const iv = "1qaz2wsx3edc4rfv"

function decrypt(cipher) {

  return CryptoJS.AES.decrypt(cipher, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC, 
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)
}

export default {
  decrypt
}