// > 本教程后续章节将统一术语：**接口**代表**接口类型**，**匿名接口**代表**对象类型**

// let arr: number[] = [1]

## 函数类型
let fn: (x: number, y: string) => boolean;
// fn = function (a: number, b: string): string {
//     // ...
//     return b;
// }

fn = function (a: number, b: string, c: number): boolean {
  // ...
  return true;
}

## keyof 作用于类型时：

interface Person {
  name: string,
  age: number
}

let keyword: keyof Person   === let keyword: "name" | "age"
let keyword = "name"
let keyword = "age"

## 接口类型

interface Person {
  name: string
  age: number
}

let man: Person = {
  name: 'zs',
  age: 11
}
等价于
let man: {
  name: string
  age: number
} = {
  name: 'zs',
  age: 11
} 

## 对象类型
let male:{
  name:string
  age:number
  gender:string
}

## 描述数组
interface StringArray {
  [index:name] : string
}
let myArray:StringArray
let myArray:{[index:number]:string}
let myArray:string[]

## 描述类
  ## 

## 抽象类
// 用于描述抽象类和抽象方法的关键字都是abstract,抽象方法，没有方法体，也就是方法的实现
abstract class Animal{
  // 抽象方法，没有方法体，也就是方法的实现
  abstract makeSound():void
  move():void{
    console.log('>>>:','moving');
  }
}
  ## 一般情况下抽象类和抽象方法同时出现的，但也有例外：
  1、一个类包含抽象方法，那么这个类必须是抽象类
  2、抽象类可以没有抽象方法