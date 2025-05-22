//对象的方法
let obj = {
    name: 'zs',
    age: 20,
    //方法  对象外叫函数  对象内叫方法
    sayHi: function () {
        console.log('hi~');
    }
}
//调用方法
obj.sayHi();
//可以加入参数