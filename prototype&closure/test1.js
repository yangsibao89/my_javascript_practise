//https://www.cnblogs.com/wangfupeng1988/p/3977924.html

function show(x) {

    console.log(typeof x);    // undefined
    console.log(typeof 10);   // number
    console.log(typeof 'abc'); // string
    console.log(typeof true);  // boolean

    console.log(typeof function () {});  //function
    console.log(typeof [1, 'a', true]);  //object
    console.log(typeof { a: 10, b: 20 });  //object
    console.log(typeof null);  //object
    console.log(typeof new Number(10));  //object
}
show();

//undefined, number, string, boolean属于简单的值类型
//函数、数组、对象、null、new Number(10)都是对象。他们都是引用类型
//值类型的类型判断用typeof，引用类型的类型判断用instanceof
//方法也是一种属性。因为它的属性表示为键值对的形式
//一切（引用类型）都是对象，对象是属性的集合