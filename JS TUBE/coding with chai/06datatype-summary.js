// 06datatype-summary.js

/** primitive datatype => they are called by value
 * 1.string
 * 2.number
 * 3.boolean
 * 4.null
 * 5.undefined
 * 6.symbol=> used to make value unique
 * 7.BigInt=> used to perform calculation on some scientific value
 */
//  here are some examples for that

const score = 100
const scoreValue = 100.9

const isLoggedIn = true
const outsideTemp = null  /** output show as a object */
let userEmail;
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 74798039.74567n
// console.log(bigNumber);


/**Reference/non-primitive=> memory me inka reference directly allocate kiya ja skta h
 * 1.array
 * 2.objects
 * 3.functions
 */

// for array
const harryPotter = ["hermione", "ronald", "severus", "dumbledore"]
console.log(typeof harryPotter);

// for objects
// let myPro{
//     name:  "Shreyash",
//     age: 20,
// }

//  for functions
const myFunction = function(){
    console.log("hello");
}