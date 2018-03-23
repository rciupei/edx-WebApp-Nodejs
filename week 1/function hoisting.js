add1(8);
//function declaration
function add1(n) {
    console.log(n + 1);
}

//x(12) //doesn't work because x is not declared

// function expression
var x = function (n) {
    console.log(n + 10);
}
x(8) //works