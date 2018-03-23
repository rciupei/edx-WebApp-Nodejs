let cls = {
    //this is valid, but must be accessed with square bracket notation
    "100": 50,
    firstName: "John",
    age: 25,
    printinfo: function () {
        console.log(this.firstName + ", and age is " + this.age);
    },
    printArrow: () => console.log("This function uses arrow notation "),

}
// this is considered anti-pattern(adding data), only adding methods is recommended
Object.prototype.easterEgg = "Hello world"
// prints hello world, this is considered anti-pattern
console.log(cls.easterEgg);

cls.printinfo();

cls.printArrow();