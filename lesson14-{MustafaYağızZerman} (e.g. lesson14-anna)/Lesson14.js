/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
const firstNumber = 5;
const secondNumber = 3;
console.log('Ex. 1. Result is:', firstNumber + secondNumber);

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
let userName = 'Elit';
const userAge = 32;
console.log(`Hello! I am ${userName} and I am ${userAge} years old.`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
const a = 10;
const b = 4;
console.log('Ex. 3:', a - b, a * b, a / b);

// 4. Use template literals to log: "My name is (userName). I like JS."
console.log(`My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
const password = 'securePass';
console.log('Ex. 5:', password.length);

// 6. Convert the string "hello world" to uppercase and log it.
let message = 'hello world';
console.log('Ex. 6:', message.toUpperCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
const greeting = 'Hello' + ' ' + 'World';
console.log('Ex. 7:', greeting);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
let x = 42;
let name = 'Zerman';
let list = [1, 2, 3];

function greet() {
  console.log('Hi');
}

console.log('Ex. 8:');
console.log('x:', x, '| type:', typeof x);
console.log('name:', name, '| type:', typeof name);
console.log('list:', list, '| type:', typeof list, '| isArray:', Array.isArray(list));
console.log('greet:', greet, '| type:', typeof greet);

// 9. Convert the number 100 to a string and log the result.
const numberToString = String(100);
console.log('Ex. 9:', numberToString, typeof numberToString);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
const stringToNumber = Number('50');
console.log('Ex. 10:', stringToNumber, typeof stringToNumber);

// 11. Generate a random integer between 0 and 10 and log it.
const randomNumber = Math.floor(Math.random() * 11);
console.log('Ex. 11:', randomNumber);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
console.log('Ex. 12:', Math.floor(3.7), Math.ceil(3.2));

// 13. Declare a boolean variable isStudent = true. Log it.
const isStudent = true;
console.log('Ex. 13:', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
let counter = 0;
counter++;
console.log('Ex. 14:', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let points = 10;
points += 5;
console.log('Ex. 15:', points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
const personName = 'Alice';
const age = 30;
const city = 'Paris';
console.log(`Ex. 16: ${personName} (${age}) lives in ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
const x1 = 5;
const y1 = 10;
const z1 = 15;
console.log('Ex. 17:', x1 + y1 + z1);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;
const differenceResult = dividend - divisor;
console.log('Ex. 18:', divisionResult, differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log('Ex. 19:', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
const firstFactor = 7;
const secondFactor = 2;
console.log('Ex. 20:', firstFactor * secondFactor);

// 21. Log the value of Math.PI.
console.log('Ex. 21:', Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
let counter2 = 0;
counter2++;
console.log('Ex. 22.1:', counter2);

counter2 += 1;
console.log('Ex. 22.2:', counter2);

counter2 = counter2 + 1;
console.log('Ex. 22.3:', counter2);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
let initialTemperature = 20;
initialTemperature += 5;
console.log('Ex. 23:', initialTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
let numberEx9 = 6;
console.log('Ex. 24:', ++numberEx9, numberEx9);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
let numberEx10 = 8;
console.log('Ex. 25:', numberEx10++, numberEx10);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let numberEx11 = -3;
console.log('Ex. 26:', (++numberEx11) * 2);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
let a2 = 2;
let b2 = 3;
console.log('Ex. 27:', ++a2 + b2);