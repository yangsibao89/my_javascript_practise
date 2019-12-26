console.log("情况一：构造函数");

function Foo() {
    this.name = "yangsibao";
    this.age = 30;

    console.log(this);
    // console.log(this.__proto__.consctructor().name)
}

var f1 = new Foo;
new Foo;

console.log(f1.name);
console.log(f1.age);

//以上代码中，如果函数作为构造函数用，那么其中的this就代表它即将new出来的对象

Foo();

//注意，以上仅限new Foo()的情况，即Foo函数作为构造函数的情况。如果直接调用Foo函数，而不是new Foo()，情况就大不一样了

console.log("情况二：函数作为对象的一个属性");

var obj = {
    x: 10,
    fn: function () {
        console.log(this);
        console.log(this.x);
    }
};

obj.fn();

//fn不仅作为一个对象的一个属性，而且的确是作为对象的一个属性被调用。结果this就是obj对象

var f2 = obj.fn;

f2();

//如上代码，如果fn函数被赋值到了另一个变量中，并没有作为obj的一个属性被调用，那么this的值就是window，this.x为undefined

console.log("情况三：函数用call或者apply调用");

var obj1 = {
    x: 10
};

var funCallOrApply = function () {
    console.log(this);
    console.log(this.x);
}

funCallOrApply.call(obj1);

//当一个函数被call和apply调用时，this的值就取传入的对象的值

console.log("情况四：全局&普通调用函数");

console.log(this === window);

var y = 10;

var f3 = function () {
    console.log(this);
    console.log(this.y);
};

f3();

//普通函数在调用时，其中的this也都是window

var obj2 = {
    x: 20,
    fn: function () {
        function f() {
            console.log(this);
            console.log(this.x);
        }
        f();
    }
}

obj2.fn();

