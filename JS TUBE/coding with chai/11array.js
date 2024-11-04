// 11array.js

const myArr = [0, 1, 2, 3, 4, 5] /**these numbers are called as element in array */
const myHeros = ["Bheem", "Hattori", "Pikachu", "Doraemon"]
const myArray2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);
console.log(myHeros[2]);
console.log(myArray2);

//  array methods


// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift(0)/**[
//     0, 0, 1, 2,
//     3, 4, 5
//   ] */
// myArr.shift()/**[ 1, 2, 3, 4, 5 ] */

// => some question modules
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)/**here join module convert array into string */

// => slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);/** it does not accept last parameters to print output */
// console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);/** it will show output upto the last parameters */
console.log(myn1);/**[ 1, 2 ] */
console.log(myn2);/**[ 1, 2, 3 ] */


