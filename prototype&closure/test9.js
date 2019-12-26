var a = 10;

function Foo1() {
    console.log(a);
};

function Foo2(f) {
    var a = 20;
    f;
};

Foo2(Foo1());

//函数在定义的时候（不是调用的时候），就已经确定了函数体内部自由变量的作用域