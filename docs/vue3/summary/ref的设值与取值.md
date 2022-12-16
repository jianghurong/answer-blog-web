```js
<script src="../../dist/vue.global.js"></script>

<div id="app">
  {{ message }}
</div>

<script>
const { ref, createApp } = Vue

createApp({
	setup() {
        const message = ref('vue3 message')
		debugger
		message.value = 'new message'
		console.log(message.value)
        return {
            message
        }
	}
}).mount('#app')
</script>
```

1. 设值
```ts
// 该代码取自RefImpl类
set value(newVal) {
    // 如果是浅处理或是只读类型,直接返回该值
    const useDirectValue =
        this.__v_isShallow || isShallow(newVal) || isReadonly(newVal)
    // 获取新值
    newVal = useDirectValue ? newVal : toRaw(newVal)
    // 如果新值与私有原始值有改变
    if (hasChanged(newVal, this._rawValue)) {
        // 私有原始值 = 新值
        this._rawValue = newVal
        // 私有值 = 是否浅处理 ? 新值 : 创建一个reactive对象
        this._value = useDirectValue ? newVal : toReactive(newVal)
        triggerRefValue(this, newVal) // 收集依赖
    }
}
// 获取原始值
export function toRaw<T>(observed: T): T {
  const raw = observed && (observed as Target)[ReactiveFlags.RAW]
  return raw ? toRaw(raw) : observed
}

// 数据变化时触发操作(双向绑定)
export function triggerRefValue(ref: RefBase<any>, newVal?: any) {
  ref = toRaw(ref)
  if (ref.dep) {
    if (__DEV__) {
      triggerEffects(ref.dep, {
        target: ref,
        type: TriggerOpTypes.SET,
        key: 'value',
        newValue: newVal
      })
    } else {
      triggerEffects(ref.dep)
    }
  }
}
/**
 * trackEffects 是 Vue 3 中的一个新的响应式系统的特性。它与 trackRefValue 类
 * 似，也是用来在 Vue.js 中的数据变化时触发某些操作的。不同的是，trackEffects 
 * 可以用来在视图渲染之前或之后执行副作用，也就是在模板中的计算属性之外的操作。
 */
```

2. 取值
```ts
get value() {
    trackRefValue(this)
    return this._value // 返回值
}
```
