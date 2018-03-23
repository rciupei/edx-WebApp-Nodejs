// access control
// closures allow us to create variables that can
// be accessed only by an enclosing funtion

function Swordsman(name, hp, dmg) {
  this.name = name;
  this.hp = hp;
  let damage = dmg;
  let attacks = 2;
  this.getDamage = () => damage * attacks;
}

let swordman = new Swordsman('John', 100, 30);
console.log(swordman.getDamage()); // prints 60
console.log(swordman.atacks);// undefined
console.log(swordman.name);// John
console.log(swordman.dmg);// undefined

// Dangers of constructors
// calling a constructor without new keyowrd (this is bound to the global object)
function Constructor() {
  this.name = 'Power of node';
}
let cls = Constructor();
console.log(cls); // undefined
console.log(name); // "Power of node"

// calling a regular function that explicitly returns an object with new
function Constructor1() {
  return { name: 'Power of Node' };
}
let cls1 = new Constructor1();
console.log(Object.getPrototypeOf(cls1) === Constructor1.prototype); // false
console.log(Object.getPrototypeOf(cls1) === Object.prototype); // true
console.log(cls1);// {name : 'Power of Node'}
