// rest parameters
function func(str1, ...restParam){
    return restParam.indexOf(8)
}

//console.log(func(1,5,7,6,4,2,8));
//returns 5, because 8 is the 5th param after str1

let name = "John";
function rename(){
   name = "Andy";
}
rename()
console.log("Name is "+name); //prints Andy


let name2 = "John";
function rename2(){
   let name2 = "Andy";
}
rename2()
console.log("Name 2 is "+name2); 
// prints John , because the let name2 in function
//blocks access to the outer variable

//closures  
function add(x){
    return function innerAdd(y){
        return x+y;
    };
}

console.log(add (5)(9)); // returns 14

//IIFE
var counter = (function(){
    var counterValue=0;
    return function(){
        return ++counterValue;
    };
}());
counter();// counter is incremented to 1
console.log(counter()); // prints 2, because counter is incremented at each invocation
var xz = counter();
counter();
counter();
console.log("\n\n" +xz); //prints 3
console.log(counter()); // prints 6