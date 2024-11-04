// console.log("s");
// console.log("h");
// console.log("r");
// console.log("e");
// console.log("y");
// console.log("a");
// console.log("s");
// console.log("h");

// console.log(12345789)
//     //      sayMyName is function name
// function sayMyName(){
//     console.log("s");
// console.log("h");
// console.log("r");
// console.log("e");
// console.log("y");
// console.log("a");
// console.log("s");
// console.log("h");
// }
// console.log(7852145)
// sayMyName()

// => for adding two numbers
// => finction ki definition bnate smay hm jo value lete h use parameters khte h
function addTwoNumbers(num1, num2){
        // let result = num1 + num2
        // return result
        return num1+ num2
}

//  function ko call krte samay hm jo value pass krte h use arguments khte h
// addTwoNumbers() /** does not show any output because of no argument in it */
// addTwoNumbers(647, 738)/** shows proper output */
// addTwoNumbers(3, "8")/**js automatically thinks 3 as a string */
// addTwoNumbers(3, "a")/** here js take 3+a as 3a */
// addTwoNumbers(3, null)/** here 3 is output */

//  let's chck through another way
// const result = addTwoNumbers(3, 5)/** result is 8 */
// console.log("Result: ", result);


// => a message to login user
function loginUserMessage(username){
    return`${username} just logged in`
}

console.log(loginUserMessage("Hello moto"))
console.log(loginUserMessage())/**undefined just logged in */