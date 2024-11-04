"use strict";
//  trear all js code as newer vwersions

// alert("hello")     does not give any output beacuse we are using nodejs not browser

console.log(3+3)
// code readability should be high
console.log("hello buddy")

// Numbers:      range is from 2 to 2 to the power 53 found in memory address
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


// undefined
// bigint
//  symbol=> used to found uniqueness in react components
console.table([length, weight, x, y, cars, date])

console.log(typeof person);
console.log(typeof null);
    //  typeof null is object
console.log(typeof undefined);
    // typeof undefined id undefined