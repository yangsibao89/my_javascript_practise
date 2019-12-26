function Foo() {
    
};

var f1 = new Foo;

console.log(f1 instanceof Foo);
console.log(f1 instanceof Object);
//Instanceof的判断队则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找
//如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。

console.log(Function instanceof Object);
console.log(Object instanceof Function);
console.log(Function instanceof Function);
//instanceof表示的就是一种继承关系，或者原型链的结构