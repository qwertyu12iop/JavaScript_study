//声明
function sayHi() {
    console.log("hi");
}
//调用
sayHi();

// 函数参数  形参  实参
function sayHiToSomeone(name) {//形参
    console.log("hi" + name);
}
sayHiToSomeone("pink", "pp", "red");//实参
//形参和实参个数不匹配时，取决于形参的个数

function getSum(num1, num2) {
    console.log(num1 + num2);
}
getSum(1, 2);