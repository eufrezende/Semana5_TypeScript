"use strict";
class Users {
    constructor(n, b) {
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
const user1 = new Users("Felipe", 10);
user1.addMoney(100);
const user2 = new Users("Antonio", 20);
console.log(user1);
console.log(user2);
let product1;
product1 = {
    name: "Aple",
    price: 2,
    itemPurchased(message) {
        console.log(message + this.name);
    },
};
product1.itemPurchased("Você acabou de comprar a ");
function addToCart(item) {
    console.log(`Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: "shoes", variantId: 1 });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Jane', 31);
console.log(`${jane.name} is ${jane.age} years old.`);
class MC {
    greet(event = 'party') {
        return `Welcome to the ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet('show'));
class Employee {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const employee = new Employee('Engineer', 100000);
console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
class Userr {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuario = new Userr('Dog', 1);
console.log(usuario.id);
usuario.name = 'Harold';
console.log(`User:`, usuario);
class HotelRooms {
}
let room = new HotelRooms();
room.A201 = 'Andre';
room.A202 = "ana";
room.A17 = 'Marcos';
console.log(room);
class Pessoa {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Clients extends Pessoa {
    get greet() {
        return 'Querido ' + super.greet;
    }
}
class Staff extends Pessoa {
    get greet() {
        return 'Oi ' + super.greet;
    }
}
let cliente1 = new Clients('Felipe', 'Rezende', 25);
let staff1 = new Staff('Ana', 'Rezende', 25);
console.log(cliente1.greet);
console.log(staff1.greet);
//# sourceMappingURL=oop.js.map