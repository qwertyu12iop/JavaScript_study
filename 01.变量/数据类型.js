//js 弱数据类型的语言 只有赋值了才知道是什么数据类型
//Number数字类型
let mun = 10
console.log(1 + 1);
console.log(19 - 1);
console.log(6 / 3);
console.log(7 * 6);
console.log(7 % 4);//取余
//NaN代表计算错误，任何对NaN的操作都会返回NaN
console.log(NaN + 5);

//String字符串类型  ''单引号 ""双引号 ``反引号
console.log('pipi' + '吃饭');//字符串拼接
//模板字符串
let age = 18
console.log(`我今年${age}岁了`);

//boolean布尔类型
let isCool = true
console.log(isCool);

//未定义类型 弱数据类型 声明一个变量未赋值 undefined
//null空的 赋值了
let obj = null
console.log(obj);

//typeof检测数据类型
console.log(typeof obj);

//类型转换
//隐式转换 任何数据和字符串相加都是字符串
console.log('pink' + 1);
//显示转换 Number(数据)
let str = '123'
console.log(Number(str));
console.log(parseInt('12.56px'));
console.log(parseFloat('25.89px'));

let num = 1
console.log(num);











