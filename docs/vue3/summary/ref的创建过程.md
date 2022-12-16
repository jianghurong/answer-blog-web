```js
<script src="../../dist/vue.global.js"></script>

<div id="app">
  {{ message }}
</div>

<script>
const { createApp, ref } = Vue

createApp({
	setup() {
		debugger
        const message = ref('vue3 message')
        return {
            message
        }
	}
}).mount('#app')
</script>
```

1. 进入``ref``函数  
```ts
/**
 * 这里对ref定义了两个函数声明,第一是有传参,第二种是无传参
 */
export function ref<T>(value: T): Ref<UnwrapRef<T>>
export function ref<T = any>(): Ref<T | undefined>
export function ref(value?: unknown) {
  return createRef(value, false)
}
```
2. 进入``createRef``函数
```ts
function createRef(rawValue: unknown, shallow: boolean) {
    // 如果传入值已经是ref类型了,直接返回这个值
    if (isRef(rawValue)) {
        return rawValue
    }
    return new RefImpl(rawValue, shallow)
}
export function isRef<T>(r: Ref<T> | unknown): r is Ref<T>
export function isRef(r: any): r is Ref {
  return !!(r && r.__v_isRef === true)
}
```
3. 新建``RefImpl``对象
```ts
class RefImpl<T> {
  private _value: T
  private _rawValue: T

  public dep?: Dep = undefined // 定义了dep对象,默认为undefined
  public readonly __v_isRef = true

  // 结合上下文__v_isShallow = false, _rawValue和_value的值都是 'message'
  constructor(value: T, public readonly __v_isShallow: boolean) {
    this._rawValue = __v_isShallow ? value : toRaw(value)
    // 如果是Object类型则执行reactive的创建过程
    this._value = __v_isShallow ? value : toReactive(value)
  }

  get value() {
    trackRefValue(this)
    return this._value
  }

  set value(newVal) {
    const useDirectValue =
      this.__v_isShallow || isShallow(newVal) || isReadonly(newVal)
    newVal = useDirectValue ? newVal : toRaw(newVal)
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal
      this._value = useDirectValue ? newVal : toReactive(newVal)
      triggerRefValue(this, newVal)
    }
  }
}

export function toRaw<T>(observed: T): T {
  // 取原始对象
  const raw = observed && (observed as Target)[ReactiveFlags.RAW]
  return raw ? toRaw(raw) : observed
}

export const toReactive = <T extends unknown>(value: T): T =>
  isObject(value) ? reactive(value) : value
```
