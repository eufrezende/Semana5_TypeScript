
// // const app = express()
// // app.use(express.static('public'))

// console.log('hi...')

// //em java script
// // function add(num1, num2){
// //     return num1 + num2
// // }

// // let result = add(5, 8)
// // console.log(result)

// //em TypeScript você tipa a variável
// function add(num1: number, num2: number){
//     return num1 + num2
// }

// let result = add(5, 8)
// console.log(result)

// //any
// let variavel


// //tuple
// let item: [string, number, boolean] = ['Oi', 10, true]

// //as array
// let values: number[]=[1, 2, 3, 4]

// //enum

// // const admin = 1
// // const read = 2
// // const backup = 3

// enum Role {admin =1, read =2, backup=3}

// const user = {
//     firstName: 'Felipe',
//     age: 30,
//     role: Role.admin
// }
// console.log(user)

// //Function Void
//     function resullt(price: number){
//         console.log(price)
//     }

// //Objetos
// const useer = {
//     firstName: 'Felipe',
//     age: 30,
// }

// //unknown
// let itemInput: unknown
// let itemName: string

// itemInput = 10
// itemInput = "Maçã"
// if(itemInput === 'string'){
//     itemName=itemInput
// }

// //never
// // function generateError(message: string, code:number): never{
// //     throw { message: message, errorCode: code}
// // }

// // generateError('a aplicação travou', 500)

// //Alias type
// type Userss = {
//     firstName: string,
//     age: number
// }

// const userr: Userss = {
//     firstName: "felipe",
//     age: 35
// }


// //Union Type
// function userInput(input1: number | string, input2: number | string){
//     let result
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//     result = input1 + input2
//     }
//     else{
//         result = input1.toString() + input2.toString()
//     }
//     return result
// }

// const combinePrices = userInput(10, 20)
// console.log(combinePrices)

// const combineName = userInput("Arroz", "Feijao")
// console.log(combineName)

// //Literal Type
// let productPrice: 10 | 20 | 30
// let productSize: "s" | "m" | "l"
// productPrice = 30
// productSize = 's'

// //intersection
// type Uuser = {
//     firstName:string,
//     age: number
// }

// type JobRole ={
//     id: number,
//     role: string
// }

// type employee = Uuser & JobRole
// const e1: employee = {
//     firstName: "Felipe",
//     age: 30,
//     id: 221,
//     role: "Admin"
// }

// Day 3 - Exercise 1

// let pi = 3.14159;
// let tau = pi * 2;

// console.log(`${tau} is ${pi} times two.`);

// // Day 3 - Exercise 2

// let pie: string
// pie = 'blueberry'

// console.log(`I like to eat ${pie}-flavored pie.`)

// // Day 3 - Exercise 3

// let isDouglas: boolean
// isDouglas = true

// console.log( `${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)

// Day 3 - Exercise 4

// const integer: number = 6;
// const float: number = 6.66;
// const hex: number   = 0xf00d;
// const binary: number = 0b1010011010;
// const octal: number= 0o744;
// const negZero: number = -0;
// const actuallyNumber: number= NaN;
// const largestNumber: number= Number.MAX_VALUE;
// const mostBiglyNumber: number= Infinity;

// const members: number[] = [
//   integer,
//   float,
//   hex,
//   binary,
//   octal,
//   negZero,
//   actuallyNumber,
//   largestNumber,
//   mostBiglyNumber
// ];

// members[0] = 12345;

// console.log(members);

// Day 3 - Exercise 5

// const sequence: number[] = Array.from(Array(10).keys());
// const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
// const stringsAndNumbers: (number | string) []= [1, 'one', 2, 'two', 3, 'three'];
// const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

// console.log(allMyArrays);