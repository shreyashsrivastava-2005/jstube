const name = "shreyash"
const surName = " Srivastava"

// console.log(name + surName + "Value"); => outdated use of string

console.log(`Hello my name is ${name} and my surname is ${surName}`);

//  => another way to print string value
const cricketScore = new String('Shreyash-Srivastava')
console.log(cricketScore);/** here string is working as string object */
console.log(cricketScore[0]);/** it will print the alphabet on that position or indexing */
console.log(cricketScore.__proto__);/** need to know about{} */
console.log(cricketScore.length);
console.log(cricketScore.toUpperCase());
console.log(cricketScore.charAt('t'));
console.log(cricketScore.charAt(2));
console.log(cricketScore.indexOf('t'));

const newString = cricketScore.substring(0, 6)
console.log(newString);

const anotherString = cricketScore.slice(-8, 5)
console.log(anotherString);/** advantage of this 'slice' is, it can take negative value in it */

const newStringOne = "    anshuman    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());

const url = "https://google.com"
console.log(url.replace('google', 'facebook'));
console.log(url.includes('facebook'));

console.log(cricketScore.split('='));