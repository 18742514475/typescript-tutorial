// 
// let arr: number[] = [1]

let fn: (x: number, y: string) => boolean;
// fn = function (a: number, b: string): string {
//     // ...
//     return b;
// }

fn = function(a: number, b: string, c: number): boolean {
    // ...
    return true;
  }

export{}

## keyof 作用于类型时：

interface Person {
  name:string,
  age:number
}

let keyword: keyof Person   === let keyword:"name"|"age"
let keyword = "name"
let keyword = "age"