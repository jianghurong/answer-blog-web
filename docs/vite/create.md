## vite
创建项目
```
npm init vite@latest
```

## eslint
安装依赖
```
npm i eslint eslint-config-standard eslint-plugin-vue eslint-plugin-import eslint-plugin-n eslint-plugin-promise --save-dev
```
.eslintrc.cjs
```js
module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        'standard'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'indent': ['error', 4], // 定义缩进
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }], // 定义vue template 缩进
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1
            },
            multiline: {
                max: 1
            }
        }], // 定义属性格式
        'vue/html-quotes': ['error', 'double', { avoidEscape: true }], // vue template 单双引号配置
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'always',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }], // vue template 标签关闭样式
        'vue/v-on-event-hyphenation': ['error', 'always', {
            autofix: true,
            ignore: []
        }] // vue template 强制事件名用连接符连接
    }
}
```

::: tip
vscode 中 eslint 可能不会及时生效，可通过禁用/启用(工作区)激活 eslint 插件状态
:::
