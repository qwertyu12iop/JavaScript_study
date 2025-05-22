//函数表达式
let fn = function () {
    console.log('函数表达式');
}
console.log(fn);


//函数表达式和具名函数的区别
//   具名函数的调用可以写在任何位置，函数表达式的调用只能写在函数表达式的后面


//立即执行函数    防止变量污染
// 写法1  (function(){})();
(function (x, y) {
    console.log(x + y);

})(1, 2);
// 写法2  (function(){}());


let age = 20
console.log(age++ && false);

console.log(age);




