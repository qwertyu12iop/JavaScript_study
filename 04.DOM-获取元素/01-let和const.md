声明变量
const优先 语义化更好

有了变量先给const 如果发现需要修改 再改成let

复杂数据类型放在堆内存中
const 声明的变量是一个常量，不能重新赋值
但是对于引用数据类型，const声明的变量是一个地址，不能重新赋值，但是可以修改地址中的值


const arr = ['red', 'blue', 'yellow']
arr.push('green')
console.log(arr);
arr = [1, 2, 4]
console.log(arr);//错误
