"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(meters) {
        console.log(`${this.name} moved ${meters}m.`);
    }
}
class Snake extends Animal {
    move(meters = 5) {
        console.log('Slithering...');
        super.move(meters);
    }
}
class Pony extends Animal {
    move(meters) {
        console.log('Galloping...');
        super.move(meters);
    }
}
const sammy = new Snake("Sammy the Snake");
sammy.move();
const pokey = new Pony("Pokey the Pony");
pokey.move(34);
class Furniture {
    constructor(manufacturer = 'IKEA') {
        this.manufacturer = manufacturer;
    }
}
class Desk extends Furniture {
    kind() {
        console.log(`This is a desk made by ${this.manufacturer}`);
    }
}
class Chair extends Furniture {
    kind() {
        console.log(`This is a chair made by ${this.manufacturer}`);
    }
}
const desk = new Desk();
desk.kind();
const chair = new Chair();
chair.kind();
let multiply;
let capitalize;
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
multiply = function (x, y) {
    return x * y;
};
console.log(capitalize(`nifty ${multiply(5, 10)}`));
function layEggs(quantity, color) {
    console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
}
layEggs(10, 'blue');
//# sourceMappingURL=exfinais.js.map