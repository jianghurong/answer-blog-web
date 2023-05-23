1. 断言
```ts
let str: any = 'foo'
let strLen: number = (str as string).length
```

2. void
```ts
let v: void = undefined // √
let v: void = null // ×
```

3. 类型别名
```ts
interface Car {
    vType: 'car',
    capacity: number
}

interface Plane {
     vType: 'plane',
    weight: number
}

type Vehicle = Car | Plane
type VehicleNew = Vehicle | string
```

4. 枚举
```ts
enum Placement {
    Top,
    Left,
    Right,
    Bottom
}
```
以上枚举类型转成```js```代码如下所示
```js
use strict
var Placement
(function (Placement) {
    Placement[Placement['Top'] = 0] = 'Top'
    Placement[Placement['Left'] = 0] = 'Left'
    Placement[Placement['Right'] = 0] = 'Right'
    Placement[Placement['Bottom'] = 0] = 'Bottom'
}) (Placement || (Placement = {}))
```
请注意  
1. Placement['Top'] = 0 的操作结果是0
2. 以上是为了实现反向映射，设置初始值。相当于默认进行以下设置
```ts
enum Placement {
    Top = 0,
    Left = 1,
    Right = 2,
    Bottom = 3
}
```
