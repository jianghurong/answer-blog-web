## 简介

``ArrayBuffer`` 对象用来表示通用的、固定长度的原始二进制数据缓冲区。  
它是一个字节数组。你不能直接操作其中的内容。要通过``类型化数组对象``或
``DataView``来操作，它们会将缓冲区中的数据表现为特定的格式，并通过这些格式来读写缓冲区的内容。  
[类型化数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)  
[DataView](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)  
``ArrayBuffer`` 是一个可转移对象  
可转移对象是拥有自己资源的对象，这些资源传输后，原始对象将不再可用。 

## 构造函数  
```js
new ArrayBuffer(length)
// length 缓存区数组字节的大小
```

### 静态方法
```js
ArrayBuffer.isView(args)
// 如果args是ArrayBuffer属性之一(即是类型化数组对象或DataView)，则返回true
```
```js
ArrayBuffer.isView(new ArrayBuffer(8)) // false
ArrayBuffer.isView(new DataView(new ArrayBuffer(8))) // true
ArrayBuffer.isView(new Int8Array(8)) // true
```

### 实例方法  
```js
ArrayBuffer.prototype.slice()
// 返回一个新的ArrayBuffer，用法同数组slice方法一样
```
