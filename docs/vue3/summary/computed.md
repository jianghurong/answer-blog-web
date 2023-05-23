今天尝试用不同的方式去解读源码。
通过[Browse History](https://github.com/vuejs/vue/commits/main/src/v3/reactivity/computed.ts)分析源码的不同阶段。
第一阶段
```js
import { Ref } from './ref'

declare const ComputedRefSymbol: unique symbol

export interface ComputedRef<T = any> extends WritableComputedRef<T> {
    readonly value: T
    [ComputedRefSymbol]: true
}

export interface WritableComputedRef<T> extends Ref<T> {

}

export type ComputedGetter<T> = (...args: any[]) => T
export type ComputedSetter<T> = (v: T) => void

export interface WritableComputedOptions<T> {
    get: ComputedGetter<T>
    set: ComputedSetter<T>
}
```
个人理解：  

首先导入```Ref```类型，再定义一个唯一```symbol```类型的值```ComputedRefSymbol```。
导出接口```ComputedRef```继承至可以读写类型```WritableComputedRef```。

第二阶段
```js
import { isServerRendering, noop, warn } from 'core/util'
import { Ref } from './ref'
import Watcher from 'core/observer/watcher'
import Dep from 'core/observer/dep'
import { currentInstance } from '../currentInstance'
import { DebuggerOptions } from '../apiWatch'

declare const ComputedRefSymbol: unique symbol

export interface ComputedRef<T = any> extends WritableComputedRef<T> {
    readonly value: T
    [ComputedRefSymbol]: true
}

export interface WritableComputedRef<T> extends Ref<T> {
    readonly effect: { stop(): void }
}

export type ComputedGetter<T> = (...args: any[]) => T
export type ComputedSetter<T> = (v: T) => void

export function computed<T>()


export interface WritableComputedOptions<T> {
    get: ComputedGetter<T>
    set: ComputedSetter<T>
}
```
