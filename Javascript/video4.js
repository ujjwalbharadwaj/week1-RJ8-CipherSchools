// 1.map()

// let array = [5, 10, 15, 20, 25];
// let newArray = [];

// for (let i = 0; i< array.length; i++) {
//     newArray[i] = array[i] * array[i];
// }

// console.log(newArray);

// let array = [5, 10, 15, 20];

// let functionForMap = (element) => element * element;

// function functionForMap(element) {
//     return element * element;
// }

// let newArray = array.map((element) => element * element);
// console.log(newArray);

// let array = [5, 10, 15, 20];
// let newArray = array.map((element, index) => {
//     console.log(index);
//     return element * element;
// });

// console.log(newArray);

// In JS, a function is also a JS Object

// 2. .forEach()

// let array = [1, 2 , 3, 4, 5];
// array.forEach((element, index) => {
//     element *= element;
//     console.log(element);
// });

// console.log("Array is :", array);

// 3. .filter() and   .find

// let array = [10, 20, 30, 40, 50];

// let newArray = array.filter((element) => element >= 30);

// let newArray = array
// .filter((element) => element >= 30)
// .map((element) => element * element)
// .filter((element) => element >= 100);
// console.log(newArray);


// let array = [10, 20, 30, 40, 50];
// let temp = array.find((value) => {
//     return value > 20;
// });

// console.log(temp);

// 4. .sort()

// let array = [50, 40, 111, 30, 20, 10];
// let sortedArray = array.sort((el1, el2) => {
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el1 - el2;
// }) ;
// console.log(sortedArray);


//Object Destructuring

// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyn",
//         city: "New York",
//         state: "NY",
//         country: "USA",
//         passportDetails: {
//             passportNumber: "ABCD1234",
//         },
//     },
// };

// console.log(details.address.passportDetails.passportNumber);
// let passportNumber = details.address.passportDetails.passportNumber;
// console.log(passportNumber);

// let myName = details.name;
// let age = details.age;

// let {name: myName, age} = details;
// console.log(myName, age);

// Array matching...

// let {
//     address: {
//         country,
//         passportdetails: { passportNumber}
//     },
// } =details;
// console.log(country, passportNumber);
// if (array1 == array2)


// Object matching...

// let obj1 = { name: "Ujjwal", age: 20 }; 
// let obj2 = { name: "Ujjwal" };

// function areEqual(obj1, obj2) {
//     if (obj1 === obj2) {
//         return true;
//     }
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     for (let key of Object.keys(obj1)) {
//         if (typeof obj2[key] == "undefined") {
//            return false;
//         }
//         if (obj2[key]!== obj1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(areEqual(obj1, obj2));


// Map and Set

// let map = new Map();
// map.set(1, "Ujjwal");
// map.set(2, "Ayush");

// map.values()
// map.keys()
// map.entries()
// map.has()

// console.log(map);


let set = new Set();

// set.add(1);
// set.add(-1);

// // set.size()
// // set.has()
// // set.add()
// // set.delete()

// console.log(set);


// class

class Animal {
    noOfLegs;
    color;
    family;
    sound;

   constructor(noOfLegs, color, family, sound) {
    this.noOfLegs = noOfLegs;
    this.color = color;
    this.family = family;
    this.sound = sound;
    }

    showAnimal() {
        console.log(`The animal belongs to family ${this.family}`);
    }
}

// let animal = new Animal(4, "brown", "rodent", "something");
// console.log(animal);
let animal = new Animal(4, "brown", "rodent", "Phew Phew");
animal.showAnimal();
