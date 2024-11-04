// 10date-time.js
//  developers take arbitary date from 01/01/1970 and starts to perform all tasks
//  date is an object in javascript


let myDate = new Date();
console.log(myDate);/**2024-04-13T19:46:20.736Z */
console.log(myDate.toString());/**Sun Apr 14 2024 01:16:20 GMT+0530 (India Standard Time) */
console.log(myDate.toDateString())/**Sun Apr 14 2024 */
console.log(myDate.toISOString());/**2024-04-13T19:46:20.736Z */
console.log(myDate.toJSON())/**2024-04-13T19:46:20.736Z */

//  => these all methods helps us to print outpt as needed

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 26);/** months are starts from 0 in js */
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let createdDateTime = new Date(2019, 5, 29, 5, 6,39);
console.log(createdDateTime);
console.log(createdDateTime.toLocaleString());

// in MM-DD-YYYY format

let dateY = new Date("09-29-2022")
console.log(dateY);
console.log(dateY.toLocaleString());/**29/9/2022, 12:00:00 am */
console.log(dateY.toDateString())/**Thu Sep 29 2022 */


// used in calulating highest time and lowest time in quizes or competition
let myTimeStamp = Date.now();
// console.log(myTimeStamp);/**1713038804119 */
// console.log(dateY.getTime())/**1664389800000 */
// console.log(Date.now());
// console.log(Date.now()/1000);/**to receive output in seconds */
// console.log(Math.floor(Date.now()/1000))/** not to show value in decimal values */

// => to know about month or year from given date
let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());