// // Promise is a class in Js
// // constructor (function)

// let num1 = 10;
// let num2 = 15;

// let myPromise = new Promise((fulfilled, notFulfilled) => {
//     let sum = num1 + num2;
//     if (sum > 24) {
//         fulfilled();
//         } else {
//             notFulfilled();
//     }
// });

// myPromise
// .then(() => {
//     console.log("Promise was fulfilled");
// })
// .catch(() => {
//     console.log("Promise was not fulfilled");
// });

// function addTwoNumbers(num1, num2) {
//     let sum = 0;
//     setTimeout(() => {
//         console.log(num1 + num2);
//         sum = num1 + num2;
//     }, 5000);
//     console.log("Inside addTwoNumbers");
//     return sum;
// }

// console.log(addTwoNumbers(2, 3));

function addTwoNumbers(num1, num2) {
    return new Promise((fulfilled, notFulfilled) => {
        setTimeout(() => {
            console.log("Inside setTimeout");
            fulfilled(num1 + num2);
            }, 5000);
            // notFulfilled(new Error("An error occured"));
    });
}

addTwoNumbers(10, 5)
.then(() => {
    console.log("Promise was fulfilled");
})
.catch(() => {
    console.log("Promise was not fulfilled");
});