```js
<script src="../../dist/vue.global.js"></script>

<div id="app">
  {{ message }}
</div>

<script>
const { createApp, reactive } = Vue

createApp({
	setup() {
		debugger
		/* const message = reactive({
			text: 'vue3 message',
			__v_isReactive: {
				foo: 1
			},
			__v_isReadonly: 'isReadonly'
		}) */ // 这种写法会影响vue的内部运行
        const message = reactive({
			text: 'vue3 message',
			isSuccess: true
		})
        return {
            message
        }
	}
}).mount('#app')
</script>
```

1. 进入``reactive``函数
```ts
// 函数声明和函数实现可以分开。这种情况通常被称为“函数提升”，
// 也就是说，在编译时 TypeScript 会把函数声明提升到代码的最顶部。
export function reactive<T extends object>(target: T):  UnwrapNestedRefs<T> // 函数声明
export function reactive(target: object) { // 函数实现
  // if trying to observe a readonly proxy, return the readonly version.
  // 如果目标对象是只读对象，直接返回
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap // new WeakMap<Target, any>()
  )
}
```
2. 进入``createReactiveObject``函数
```ts
function createReactiveObject(
  target: Target, // 要创建为响应式对象的对象
  isReadonly: boolean, // 一个布尔值，指示创建的响应式对象是否为只读。如果为 true，则不允许修改该对象的属性。
  baseHandlers: ProxyHandler<any>, // 一个对象，定义了用于处理基本操作（例如取值和赋值）的代理处理程序。
  collectionHandlers: ProxyHandler<any>, // 一个对象，定义了用于处理集合操作（例如添加和删除元素）的代理处理程序。
  proxyMap: WeakMap<Target, any> // 一个 WeakMap，用于跟踪已创建的代理。
) {
    // 1.如果目标对象不是Object类型，直接返回该对象，并在开发环境进行提示
    if (!isObject(target)) {
        if (__DEV__) {
            console.warn(`value cannot be made reactive: ${String(target)}`)
        }
        return target
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    // !(isReadonly && target[ReactiveFlags.IS_REACTIVE]) 表示检查 target 对象是否具有 "IS_REACTIVE" 标志，并且 isReadonly 变量为 true。
    // 要想a && !b 成立, b的值应为false,那么 (c && d)=false的情况下，c或者d应同为false或其中之一是false
    // 2.结合上下文，创建的时候isReadonly是false,那么 target[ReactiveFlags.IS_REACTIVE]不论是false还是true都是直接返回
    if (
        target[ReactiveFlags.RAW] &&
        !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
    ) {
        return target
    }
    // target already has corresponding Proxy
    // 3.如果已存在proxyMap
    const existingProxy = proxyMap.get(target)
    if (existingProxy) {
        return existingProxy
    }
    // only specific value types can be observed.
    // 4. 只有特定的值类型才能监听 如果类型不合法直接返回
    const targetType = getTargetType(target)
    if (targetType === TargetType.INVALID) {
        return target
    }
    // 5. 新建代理对象
    const proxy = new Proxy(
        target,
        targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
    )
    proxyMap.set(target, proxy)
    // 返回代理对象
    return proxy
}
```
3. ``getTargetType``函数
```ts
function getTargetType(value: Target) {
    // value[ReactiveFlags.SKIP] - 无需响应的对象
    // !Object.isExtensible(value) - 判断一个对象是否可扩展的 
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
    // TargetType.INVALID = 0 不合法类型
    // targetTypeMap(toRawType(value)) 获取值原始类型
    return value[ReactiveFlags.SKIP] || !Object.isExtensible(value)
        ? TargetType.INVALID
        : targetTypeMap(toRawType(value))
}
function targetTypeMap(rawType: string) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return TargetType.COMMON
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return TargetType.COLLECTION
    default:
      return TargetType.INVALID
  }
}
```
