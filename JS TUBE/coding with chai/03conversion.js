let score = 53

console.log(typeof score);
console.log(typeof (score));
//  output is in number

let run = "53"

console.log(typeof run);
console.log(typeof (run));
//  output is in string

//    => to change value to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//  => for null value
let marks = null
let valueInMarks = Number(marks)
console.log(typeof valueInMarks);   /* output is number */
console.log(valueInMarks);  /* output is 0 */


// for string to convert into number
let name = "shreyash"
let valueInName = Number(name)
console.log(typeof valueInName);   /* output is number */
console.log(valueInName);  /* output is NaN */

/*some conclusion are as follows-
1. "33"=>33
2. "33abc"=>NaN which means Not a Number
3.true=> 1;  false=>0
4.

 */

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  /* output is true */
/* for boolean conversion
1=> true; 2=> false
""=> false
"shreyash"=> true */