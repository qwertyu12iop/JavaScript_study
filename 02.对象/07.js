//内置对象  JS内部提供的对象 包含各种属性和方法

// 1.Math
//属性
console.log(Math.PI);
//方法
console.log(Math.ceil(1.1));//向上取整
console.log(Math.floor(1.9));//向下取整
console.log(Math.round(1.5));//四舍五入 
console.log(Math.abs(-1));//绝对值
console.log(Math.max(1, 2, 3));//最大值
console.log(Math.min(1, 2, 3));//最小值

//随机数
Math.random();//0-1之间的随机数  包含0 不包含1 [0,1)
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));//[1,10]随机整数

let arr = ['red', 'green', 'blue', 'pink', 'yellow']
let random = Math.floor(Math.random() * arr.length)
console.log(random);
console.log(arr[random]);

//取M~N之间的随机整数
function getRandom(M, N) {
    return Math.floor(Math.random() * (N - M + 1) + M);
}


