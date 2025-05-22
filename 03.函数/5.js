//函数细节
//函数名冲突  后面覆盖前面的，就近原则
function fn() {
    console.log(1);
}
function fn() {
    console.log(2);
}
fn()//2

//函数一旦碰到return 就会停止执行