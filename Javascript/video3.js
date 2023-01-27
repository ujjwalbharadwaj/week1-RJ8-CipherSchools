// In javaScript, we can declare a variable in 3 ways
// 1. by using var
// 2. by using let
// 3. by using const

// var myName = "Ujjwal";
// console.log(myName);

// const myName = [];
// console.log(myName);
// myName.append("Ujjwal");
// console.log(myName);

// let myName = "Ujjwal";
// console.log(myName);
// myName = "5"; 
// console.log(myName);

// String Interpolation

// let firstName = "Ujjwal";
// let lastName = "Bhardwaj"

// console.log(firstName + " " + lastName)

// let fullName = firstName + " " + lastName

// let  fullName = `${firstName} ${lastName}` ;
// console.log(fullName);


// Default Params
// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// let addTwoNumbers =(num1, num2) => {
//     return num1 + num2;
// }

// let addTwoNumbers =(num1, num2) => num1 + num2;

// let addTwoNumbers =(num1, num2) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 + num2;
// };

// console.log(addTwoNumbers(1,2));

// Rest and Spread Operator are applicable in Arrays and objects in JS
// let array = [5, 10 , 15, 20, 25];

// Spread operator is denoted with -> "..."

// let  newArray = [... array, 30,35,40];
// let newArray = [...array]; // to make a copy of array
// console.log(...array);

// Rest operator is also denoted with->"..."
// let testFunction = (...args) => {
//     console.log(args);
// };

// let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
// let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1, Math.max(num2, num3));

// let maxOfNumbers = (...numbers) => {
//     console.log(numbers);
// }
// maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for (let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// };
// console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// For Object

let object = {
    // name: "Ujjwal",
    // age: 20,
    // city: "Jalandhar",

    name: "Ujjwal",
    age: 24,
    address: {
        city: "Jalandhar",
        state: "Punjab",
        country: "INDIA",
    },
};
let object2 = JSON.parse(JSON.stringify(object));
// let object2 = {...object};
object2.address.city = "Phagwara";
console.log(object2);