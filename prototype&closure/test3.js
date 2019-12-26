function MyFun() {
    
};

MyFun.prototype.methodName = "yangsibao Method";
MyFun.prototype.methodArguments = function () {
    return 99;
}

var myFun = new MyFun();

console.log(myFun.methodName);
console.log(myFun.methodArguments());
//因为每个对象都有一个隐藏的属性——“__proto__”，这个属性引用了创建这个对象的函数的prototype。即：fn.__proto__ === Fn.prototype
//这里的"__proto__"成为“隐式原型”