//数组遍历
let arr = ['zs', 'ls', 'ww']
for (let k in arr) {
    console.log(k);//0 1 2  下标
    console.log(arr[k]);//zs ls ww  元素
}
//for in 不推荐遍历数组

//1.遍历对象 for in
let obj = {
    name: 'zs',
    age: 18,
    sex: '男'
}
for (let key in obj) {
    console.log(key);//属性名 name age sex
    console.log(obj[key]);//属性值 zs 18 男
    //key是带引号的字符串 obj.key是undefined
}
