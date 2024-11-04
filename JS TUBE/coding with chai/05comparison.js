console.log("2" > 1) /** => here string is automatically converted into number */
console.log("02" > 1);/** output is true */
// => whenever we compare any datatype with another type of datatype then output is not much effective in that case
// => typescript provide some strict rules in which we can't compare different datatype

// => let's see the problem occurs during different datatypes comparison
console.log(null > 2);
console.log(null == 0);
console.log(null <= 0);

//  => let's check for undefined datatypes
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0); /**output is false */

//  (===) => this triple equal sign check not only the comparison but also checks datatypes of it
console.log("2" == 2);
console.log("2" === 2);/** here it checks about datatypes hence output is false */