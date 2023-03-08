## Typescript 语言特性  
* 类型批注和编译时类型检查  
* 类型推断
* 类型擦除
* 接口
* 枚举
* Mixin
* 泛型编程
* 名字空间
* 元组
* Await
* 类
* 模块
* lambda 函数箭头语法
* 可选参数以及默认参数

## 变量声明  
语法
```ts
let [变量名]: [类型] = 值
```
示例
```ts
let num: number = 1
```
其它格式:
```ts
let num:number // let num:number = undefind
let num // let num:any = undefined
```

## 类型断言
类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
语法
```ts
<类型>值
值 as 类型
```
示例
```ts
let someValue: any = 'this is string'
let strLength: number = (<string>someValue).length
let strLength2: number =(someValue as string).length
```


## 类型推断  
当类型没有明确定义时，``TypeScript``编译器利用类型推断来推断类型。
```ts
let str3: string = 'string'
str3 = 1 // ts(2322)不能将类型“number”分配给类型“string”
```

## 联合类型  
``Union Types``可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型赋值。
语法
```ts
Type1|Type2|Type3
```
示例
```ts
let someValue2: string | number
someValue2 = 2
someValue2 = '2'
let someValue3: string[] | number[]
someValue2 = [3]
someValue2 = ['2']
```

## 接口  
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现。然后第三方就可以通过抽象方法让具体的类执行具体的方法。
语法
```ts
interface Person {
    name: string,
    age: number,
    favorite?: ['basketball', 'code']
}

let p1: Person = {
    name: 'answer',
    age: 16
}
```
::: tip
```
接口不会转为JavaScript，它是TypeScript的一部分
```
:::
```ts
// 联合类型和接口
interface Student {
    name: string,
    age: number,
    score: number | string
}
// 接口和数组

// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
interface NameList {
    [index: number]: string
}
let nameList: NameList = ['1']

// 接口继承
// 接口可以通过其它接口来扩展自己，TypeScript允许接口继承多个接口
interface Student extends Person, Chinese
```
### 继承接口
和类一样，接口也可以继承。这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
```ts
interface Shape {
    color: string
}
interface Square extends Shape {
    sideLength: number
}
let square = <Square>{} // 类型断言
square.color = 'blue'
square.sideLength = 10
let square1: Square = {
    color: '',
    sideLength: 0,
    width: ''
}
```
