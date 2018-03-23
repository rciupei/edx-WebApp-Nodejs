//constructor
function Swordsman(name, hp, dmg) {
    this.name = name;
    this.hp = hp;
    this.damage = dmg;
    this.atacks = 2;
}

let swordsman = new Swordsman("John", 80, 50)
console.log(swordsman.name);
// prints John

Swordsman.prototype.getTotalDamage = function(){
    return this.atacks * this.damage
}
console.log(swordsman.getTotalDamage());
//prints 100