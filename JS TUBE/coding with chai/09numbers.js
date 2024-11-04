// const score = 400
// console.log(score);
// console.log(typeof score);


// const balance = new Number(100.8)
// console.log(balance);

// console.log(balance.toString()); /** The toString() method returns a string as a string. */
// console.log(balance.toString().length);/**used to check the length of a string */
// console.log(balance.toFixed(3));/**used to format numbers to a specific number of 
// decimal places, or to round numbers to the nearest integer. */


// const num = 89.538272
// console.log(num);
// console.log(num.toPrecision(4));/**precision starts from very first value not after decimal vakues */
// console.log(num.toPrecision(3));


// const value = 1000000;
// console.log(value.toLocaleString());
// console.log(value.toLocaleString('en-IN'));/** not working */
// console.log(value.toExponential());

/** ----------maths----------------- */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(45.678));
// console.log(Math.ceil(4.2));/** it will give upper value */
// console.log(Math.floor(4.8));/**it will give lower value */
// console.log(Math.sqrt(81));/** used to give square root of that number */
// console.log(Math.min(9,8,7,6,8,9,10,79));/** used to show minimum value from a given array */
// console.log(Math.max(9,8,7,6,8,9,10,79));/** used to show maximum value from a given array */

console.log(Math.random());/** genrates random numbers between 0 to 1 */
console.log(Math.random()*10);
//  just to avoid case of 0 value we generally add 1 in it
console.log((Math.random()*10) + 1);/** this line guarantees value will never be 0 */
console.log(Math.floor(Math.random()*10) + 1);/** this will does not generate output in decimal values */


const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)) + min);8