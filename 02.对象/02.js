//对象的本质是无序的数据集合   增 删 改 查

let obj = {
    name: 'pp',
    age: 18,
    sex: '女',
    sayHi: function () {
        console.log('hi');
    }
}
//查
console.log(obj.name);
//查的另外一种方式  对象名['属性名']
console.log(obj['name']);
//改
obj.name = 'hx';
console.log(obj.name);
//增
//改和增语法一样  有就改 没有就增
obj.hobby = '学习';
console.log(obj.hobby);
//删
delete obj.name;
console.log(obj.name);//undefined