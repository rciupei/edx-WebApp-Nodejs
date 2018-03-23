const cls = {
    name: "Power of node",
    year: 2016
};
function print(num){
    for(i=0;i<num;i++){
        console.log(this.name);
    }
}

print.call(cls,3) // prints "Power of Node 3 times"
print.apply(cls,[2]) // prints "Power of Node 3 times"