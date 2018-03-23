function test(first, second) {
    console.log(second);
}

// we can invoke a function with a different amount of arguments than parameters
test("abc","def",3,"ghi")
//prints def

// we can specify a default value for a parameter
function exp(base=2,power=10){
    return Math.pow(base,power)
}

console.log(exp()); // returns 1024
console.log(exp(2,5)); // returns 32
console.log(exp(undefined,6)); //returns 64

function test2(){
    // by default a function returns undefined
    console.log("object");
}
console.log(test2());
//returns undefined

function test3(){
    // by default a function returns undefined
    console.log("object");
    return 12
}
console.log(test3());
//returns 12