function Foo() {

};

var f1 = new Foo;

f1.a = 10;

Foo.prototype.a = 100;
Foo.prototype.b = 200;

console.log(f1.a);
console.log(f1.b);

//访问一个对象的属性时，先在基本属性中查找，如果没有，再沿着__proto__这条链向上找，这就是原型链

var item;

for (item in f1) {
    console.log(item);
}

console.log("===========");

for (item in f1) {
    if (f1.hasOwnProperty(item)) {
        console.log(item);
    }
}