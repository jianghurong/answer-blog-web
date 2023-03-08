let message: string = "Hello World"

function alertMessage<T>(msg: T): void {
    alert(msg)
}
alertMessage(message)

let num: number = 123.456
num.toFixed(2)

let num1: number = 234

let sum:number = num + num1

let a:number
a = 1111

let str: string = 'string'
let str2: number = <number><any> str

let someValue: any = 'this is string'
let strLength: number = (<string>someValue).length

let str3: string = 'string'
str3 = 'string'

let someValue2: string | number
someValue2 = 2
someValue2 = '2'

interface Person {
    name: string,
    age: number,
    favorite?: ['ball', 'code']
}

let p1: Person = {
    name: 'answer',
    age: 16
}

interface NameList {
    [index: number]: string
}
let nameList: NameList = ['1']
// num.splice(0, 1)

interface Shape {
    color: string
}
interface Square extends Shape {
    sideLength: number
}
let square = <Square>{} // 类型断言
let square1: Square = {
    color: '',
    sideLength: 0
}
