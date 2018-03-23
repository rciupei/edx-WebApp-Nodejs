var king ={firstName:"John", lastName:"Doe",age:35}
for(let i in king){
    console.log(i);
}

// returns firstName, lastName

// for(let i of king) doesn't work
// for/in is better for objects and For/of for arrays

var food = ["meat","eggs","milk"];
for(let i of food){
    console.log(i);
}
// prints the contents

for(let i in food){
    console.log(i);
}
// prints 0 1 2 

