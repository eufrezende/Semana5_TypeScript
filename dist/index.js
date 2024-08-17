"use strict";
console.log('hi...');
function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 8);
console.log(result);
let variavel;
let item = ['Oi', 10, true];
let values = [1, 2, 3, 4];
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Felipe',
    age: 30,
    role: Role.admin
};
console.log(user);
function resullt(price) {
    console.log(price);
}
const useer = {
    firstName: 'Felipe',
    age: 30,
};
let itemInput;
let itemName;
itemInput = 10;
itemInput = "Maçã";
if (itemInput === 'string') {
    itemName = itemInput;
}
const userr = {
    firstName: "felipe",
    age: 35
};
function userInput(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineName = userInput("Arroz", "Feijao");
console.log(combineName);
let productPrice;
let productSize;
productPrice = 30;
productSize = 's';
const e1 = {
    firstName: "Felipe",
    age: 30,
    id: 221,
    role: "Admin"
};
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie}-flavored pie.`);
let isDouglas;
isDouglas = true;
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`);
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log(members);
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];
console.log(allMyArrays);
//# sourceMappingURL=index.js.map