//  story starts with let var const

if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);/** a is not defined */
// console.log(b);/** b is not defined */
// console.log(c);/**30 */


let x = 3000
if (true) {
    let x = 10
    const y = 20
    var z = 45
    // console.log("INNER: ",x)
}
// console.log(x)
// // console.log(y)
// console.log(z)






// => nested scope
function one() {
    const username = "Shreyash"

    function two() {
        const website = "Instagram"
        // console.log(username);
    }
    // console.log(website)/**ReferenceError: website is not defined */
    two()
}

one()

//  using if  else statement
if (true) {
    const username = "Anshuman"
    if (username === "Anshuman") {
        const website = " Instagram"
        console.log(username + website)/**Anshuman Instagram */
    }
    // console.log(website)/**ReferenceError: website is not defined */
}
// console.log(username)/**ReferenceError: username is not defined */


// ====== intersting parts =======


console.log(addone(5))
function addone(num) {
    return num + 1
}




// console.log(addTwo(5))   => ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {/**these types are several called as expressions */
    return num +2
}
console.log(addTwo(5))