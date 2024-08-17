//a classe define os parâmetros e o construtor "isntancia"
class Users {
  name: string;
  balance: number;

  constructor(n: string, b: number) {
    this.name = n;
    this.balance = b;
  }

  //o método passa um parâmetro e a operação
  addMoney(amount: number) {
    this.balance += amount;
  }
}
const user1 = new Users("Felipe", 10);
//chamando o método
user1.addMoney(100);

const user2 = new Users("Antonio", 20);
console.log(user1);
console.log(user2);

interface Item {
  name: string;
  price: number;
  //método
  itemPurchased(message: string): void;
}

//quando criar o objeto ela tem q utilizar tudo o que está dentro do Item
let product1: Item;
product1 = {
  name: "Aple",
  price: 2,
  itemPurchased(message: string) {
    console.log(message + this.name);
  },
};
product1.itemPurchased("Você acabou de comprar a ");

// Day 5 - Exercise 1

interface CardItem {
    id: number
    title: string
    //a ? deixa a variável como opicional
    variantId?: number 
}

function addToCart(item: CardItem) {
  console.log(`Adding "${item.title}" to cart.`);
}

addToCart({ id: 1, title: "shoes", variantId: 1 });

  // Day 5 - Exercise 2

interface Person {
    name: string
    age: number
}

//associando uma interface à uma classe
class Person implements Person{
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log(`${jane.name} is ${jane.age} years old.`);

  // Day 5 - Exercise 3

class MC {
    greet(event: string = 'party'): string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log(mc.greet('show'));

  // Day 5 - Exercise 4

//   class Employee {
//     title: string;
//     salary: number;
//     constructor(title: string, salary: number) {
//       this.title = title;
//       this.salary = salary;
//     }
//   }
//Esse código é o mesmo que:
class Employee {
    //a declaração do public no construtor
    //cria e inicializa a propriedade
    //pode-se usar public readonly
    //quando for private você precisa por _ antes do nome dela
    constructor( public title: string, public salary: number) {}
  }

  const employee = new Employee('Engineer', 100000);

  console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);

  // Day 5 - Exercise 5

interface UserSchema {
    id: number
    name: string
}

class Userr implements UserSchema {
    //readonly nao deixa a propriedade ser alterada
    constructor(public name: string, readonly id: number) {}
}

const usuario = new Userr('Dog', 1)

console.log(usuario.id)

usuario.name = 'Harold' // pode mudar
//usuario.id = 5 // nao pode mudar

console.log(`User:`, usuario)

//Index Signatures

class HotelRooms {
    [roonNumber: string]: string
}

let room = new HotelRooms()
room.A201 = 'Andre'
room.A202 = "ana"
room.A17 = 'Marcos'

console.log(room)

//Herança

// class Pessoa {
//     constructor(public firstName:string, public lastName: string, public age: number){}

//     //método
//     greet(){
//         console.log('Hi')
//     }
// }
// //Cliente do banco
// class Clients extends Pessoa {
//     balance(){
//         console.log('Seu saldo é $100')
//     }

// }

// let cliente1 = new Clients('Felipe', 'Rezende', 25)
// cliente1.balance

//Overriding
class Pessoa {
    constructor(public firstName:string, public lastName: string, public age: number){}

    //método
    get greet(){
        return this.firstName + ' ' + this.lastName
    }
}
//Cliente do banco
class Clients extends Pessoa {
    override get greet(){
        return 'Querido ' + super.greet
    }
}

//Cliente do banco
class Staff extends Pessoa {
    override get greet(){
        return 'Oi ' + super.greet
    }
}

let cliente1 = new Clients('Felipe', 'Rezende', 25)
let staff1 = new Staff('Ana', 'Rezende', 25)
console.log(cliente1.greet)
console.log(staff1.greet)

