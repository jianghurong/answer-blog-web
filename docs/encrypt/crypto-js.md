## crypto-js
安装依赖
```sh
npm install crypto-js --save
```
cipher.js
```js
import { encrypt, decrypt } from 'crypto-js/aes'
import UTF8, { parse } from 'crypto-js/enc-utf8'
import pkcs7 from 'crypto-js/pad-pkcs7'
import ECB from 'crypto-js/mode-ecb'
import md5 from 'crypto-js/md5'
import Base64 from 'crypto-js/enc-base64'

export class AesEncryption {
    constructor (opt) {
        const { key, iv } = opt
        if (key) this.key = parse(key)
        if (iv) this.iv = parse(iv)
    }

    getOptions () {
        return {
            mode: ECB,
            padding: pkcs7,
            iv: this.iv
        }
    }

    // AES 前端加密
    encryptByAES (cipherText) {
        return encrypt(cipherText, this.key, this.getOptions()).toString()
    }

    // AES 前端解密
    decryptByAES (cipherText) {
        return decrypt(cipherText, this.key, this.getOptions()).toString(UTF8)
    }
}

export function encryptByBase64 (cipherText) {
    return UTF8.parse(cipherText).toString(Base64)
}

export function decodeByBase64 (cipherText) {
    return Base64.parse(cipherText).toString(UTF8)
}

export function encryptByMd5 (password) {
    return md5(password).toString()
}
```
index.js
```js
import { AesEncryption } from '@/utils/encrypt/cipher'

// 加密key
const cacheCipher = new AesEncryption({
    key: '1_2111000002222@',
    iv: '12345@000002222_'
})

const encData = cacheCipher.encryptByAES(JSON.stringify({ obj: 1, key: 2 }))
console.log(encData) // FA7VyTv9IoXq8mJSac1jzJoBocBBkKmdWKKijwzTps4=
const decData = cacheCipher.decryptByAES(encData)
console.log(decData) // {"obj":1,"key":2}
```
