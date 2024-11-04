//  07stack-heap.js
//  this is about stack and heap memory in js
// =>stack memory is used in primitive datatypes
// =>heap memory is used in non-primitive datatypes


// => let's see an example for stack memory
let myInstaId = "srivastshreyash"
let anotherName = myInstaId
anotherName = "shreyashsrivastava"

console.log(myInstaId);
console.log(anotherName);


// => let's see an exmaple for heap memory
let userOne = {
    email: "sriavstshreyash@gmail.com",
    upi: "user@byl"
}
console.log(userOne)

let userTwo = userOne
userTwo.email = "contactme@gmail.com"

console.log(userTwo);
console.log(userOne.email);
console.log(userTwo.email);