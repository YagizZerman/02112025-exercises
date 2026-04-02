/* 
Topic: JavaScript Basics
*/

// 1
const firstNumber = 5;
const secondNumber = 3;
console.log('Ex. 1:', firstNumber + secondNumber);

// 2
let userName = 'Elit';
const userAge = 32;
console.log(`Hello! I am ${userName} and I am ${userAge} years old.`);

// 3
const a = 10;
const b = 4;
console.log('Ex. 3:', a - b, a * b, a / b);

// 4
console.log(`My name is ${userName}. I like JS.`);

// 5
const password = 'securePass';
console.log('Ex. 5:', password.length);

// 6
let message = 'hello world';
console.log('Ex. 6:', message.toUpperCase());

// 7
const greeting = 'Hello' + ' ' + 'World';
console.log('Ex. 7:', greeting);

// 8
let x = 42;
let name = 'Gökay';
let list = [1, 2, 3];

function greet() {
  console.log('Hi');
}

console.log('Ex. 8:', typeof x, typeof name, typeof list, Array.isArray(list), typeof greet);

// 9
const num = 100;
console.log('Ex. 9:', String(num), typeof String(num));

// 10
const strNum = "50";
const convertedNum = Number(strNum);
console.log('Ex. 10:', convertedNum, typeof convertedNum);

// 11
const randomNumber = Math.floor(Math.random() * 11);
console.log('Ex. 11:', randomNumber);

// 12
console.log('Ex. 12:', Math.floor(3.7), Math.ceil(3.2));

// 13
const isStudent = true;
console.log('Ex. 13:', isStudent);

// 14
let counter = 0;
counter++;
console.log('Ex. 14:', counter);

// 15
let points = 10;
points += 5;
console.log('Ex. 15:', points);

// 16
const name1 = "Alice";
const age1 = 30;
const city = "Paris";
console.log(`Ex. 16: ${name1} (${age1}) lives in ${city}`);

// 17
const x1 = 5;
const y1 = 10;
const z1 = 15;
console.log('Ex. 17:', x1 + y1 + z1);

// 18
const dividend = 10;
const divisor = 3;
console.log('Ex. 18:', dividend / divisor, dividend - divisor);

// 19
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log('Ex. 19:', fullName);

// 20
const firstFactor = 7;
const secondFactor = 2;
console.log('Ex. 20:', firstFactor * secondFactor);

// 21
console.log('Ex. 21:', Math.PI);

// 22
let counter2 = 0;
counter2++;
console.log('Ex. 22.1:', counter2);

counter2 += 1;
console.log('Ex. 22.2:', counter2);

counter2 = counter2 + 1;
console.log('Ex. 22.3:', counter2);

// 23
let initialTemperature = 20;
initialTemperature += 5;
console.log('Ex. 23:', initialTemperature);

// 24
let numberEx9 = 6;
console.log('Ex. 24:', ++numberEx9, numberEx9);

// 25
let numberEx10 = 8;
console.log('Ex. 25:', numberEx10++, numberEx10);

// 26
let numberEx11 = -3;
console.log('Ex. 26:', (++numberEx11) * 2);

// 27
let a2 = 2;
let b2 = 3;
console.log('Ex. 27:', ++a2 + b2);