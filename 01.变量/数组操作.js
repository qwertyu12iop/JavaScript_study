//增删改查

//改
let arr = ['pink', 'red', 'blue', 'green', 'yellow']
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + '!'
}
console.log(arr);


//增   
// arr.push()将一个或多个元素添加到数组的末尾
let arr1 = ['red', 'green', 'blue']
arr1.push('pink')
console.log(arr1.push('black'));//返回该数组的新长度
// arr.unshift()将一个或多个元素添加到数组的开头,返回该数组的新长度
arr1.unshift('purple')
console.log(arr1);

//删
//arr.pop()删除数组的最后一个元素,并返回该元素的值
console.log(arr1.pop());
console.log(arr1);
//arr.shift()删除数组的第一个元素,并返回该元素的值
console.log(arr1.shift());
console.log(arr1);
//arr.splice() 删除指定元素
//arr.splice(起始下标,删除的个数)
arr1.splice(1, 2)
console.log(arr1);
//arr.splice(起始下标,删除的个数,要添加的元素)
arr1.splice(1, 1, 'red', 'green')
console.log(arr1);