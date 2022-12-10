## 源码分析

```ts
/* globals MutationObserver */
/* 全局性的DOM变化监听器 */

import { noop } from 'shared/util'
// noop 是一个空操作函数 相当于 functoin () {}
import { handleError } from './error'
// handleError 错误处理器
import { isIE, isIOS, isNative } from './env'
// isNative - 判断给定的值是否为原生的 JavaScript 值
// function isNative(Ctor) { return typeof Ctor === 'function' && /native code/.test(Ctor.toString()) }

export let isUsingMicroTask = false
// 是否正在使用的是微任务 默认false

const callbacks: Array<Function> = [] // 定义回调数组
let pending = false // 是否处于等待状态

// 清空待执行的回调函数，然后依次执行队列中的回调函数
function flushCallbacks() {
  pending = false
  const copies = callbacks.slice(0) // 复制回调数组
  callbacks.length = 0 // 清空回调函数
  for (let i = 0; i < copies.length; i++) {
    copies[i]() // 依次执行回调函数
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).

/*
 这段代码解释了为什么在 Vue.js 中使用微任务来替代宏任务。在 Vue.js 2.5 中，宏任务和微任务一起使用，但是会导致一些问题，比如当状态在重绘之前改变（如#6813，out-in transitions）。同时，在事件处理程序中使用宏任务会导致一些奇怪的行为，无法规避（如#7109，#7153，#7546，#7834，#8109）。因此，现在在所有地方都使用微任务。微任务的一个主要缺点是，在某些情况下，微任务的优先级太高，在预期的顺序事件之间触发（如#4521，#6690，其中有解决方案），甚至在同一事件冒泡期间（#6566）。
 */
let timerFunc // 渲染循环中给定的回调函数

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/*
这段代码描述了 Vue.js 中的 nextTick 机制是如何利用微任务队列来实现的。可以通过 native Promise.then 或 MutationObserver 来访问微任务队列。MutationObserver 具有更广泛的支持，但是在 iOS >= 9.3.3 的 UIWebView 中，它在触摸事件处理程序中触发时存在严重问题。触发几次后它完全停止工作... 因此，如果 native Promise 可用，我们将使用它。
*/

/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) { // 如果 Promise 可用
  const p = Promise.resolve() // 已完成状态
  timerFunc = () => {
    p.then(flushCallbacks) // 将flushCallBacks添加到微任务队列中
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    /*
    如果当前环境是 iOS 的 UIWebView，则会添加一个空计时器，以便在其他地方触发微任务队列的刷新。这是因为在 UIWebView 中，微任务队列可能会出现问题，导致回调函数不能被执行。添加空计时器可以强制刷新微任务队列，从而避免这个问题。
    */
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (
  !isIE &&
  typeof MutationObserver !== 'undefined' &&
  (isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]')
) { // MutaionObserver 判断可用
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1
  const observer = new MutationObserver(flushCallbacks) // 触发指定DOM事件时，调用指定回调函数
  const textNode = document.createTextNode(String(counter)) // 创建一个文本节点
  observer.observe(textNode, {
    characterData: true
  }) // 监听文本节点字符变化
  timerFunc = () => {
    counter = (counter + 1) % 2 // 每次调用 timerFunc 值为0或1 
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  /*
  上面这段代码描述了一种替代方案，用于处理在下一个渲染循环中执行回调函数。它使用了 setImmediate 方法，这是一种用于在下一个事件循环中执行回调函数的方法。它通过利用 (macro) 任务队列来实现，但是它比 setTimeout 更好的选择。
    setImmediate 方法与 setTimeout 方法类似，但它会将回调函数排队到下一个事件循环中执行。它的执行顺序比 setTimeout 方法优先，因此可以用来替代 setTimeout 方法。但是，setImmediate 方法并不支持延迟执行，因此只能在下一个事件循环中执行回调函数。如果需要延迟执行，则需要使用 setTimeout 方法。
    注意：setImmediate 是非标准的方案(宏任务)
  */
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  // Fallback to setTimeout.
  /**
   * 如果以上方案都不符合，则使用 setTimout 来执行
   */
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

export function nextTick(): Promise<void>
export function nextTick<T>(this: T, cb: (this: T, ...args: any[]) => any): void
export function nextTick<T>(cb: (this: T, ...args: any[]) => any, ctx: T): void
// nextTick 多态

/**
 * @internal
 */
// nextTick 内部实现
export function nextTick(cb?: (...args: any[]) => any, ctx?: object) {
  // 第一个参数 cb 是一个回调函数，第一个参数 ctx 表示回调函数的 this 指向
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e: any) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) { // 如果没有挂起的回调函数,则执行 timerFunc 函数
    pending = true
    timerFunc()
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    }) // 下个渲染循环中被解析
  }
}
```

## 总结  
* 使用四套方案，顺序为 ``Promise``（微) > ``MutationObserver``(微) > ``setImmediate``(宏) > ``setTimeout``(宏)
