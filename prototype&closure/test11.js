var a = 10,
    fn,
    bar = function (x) {
        var b = 5;
        fn(b + x);
    };

fn = function (y) {
    var c = 5;
    console.log(y + c);
};

bar(10);