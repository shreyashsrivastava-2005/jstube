// "this" => it's a keyword used for current context
//  context means ki hm kiske bare me baat kr rhe h



const user = {
    username: "Anshuman",
    price: 699,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        // console.log(this)
    }
}
// user.welcomeMessage()/**Anshuman, welcome to website. */
// user.username = "Shreyash"
// user.price = 499
// user.welcomeMessage()/**Shreyash, welcome to website. */
// console.log(this)/**{} */




// function chai(){
//     let username = "buddy"
//     console.log(this.username)/**undefined */
// }
// chai()

// ===== arrow functions =====
// const chai = function() {
//     let username = "tullu"
//     console.log(this.username)/**undefined */
// }
// chai()
// above example was for normal function declaration
//  now time for arrow function declaration
const chai = () => {
        let username = "tullu"
        console.log(this.username)/**undefined */
    }
    chai()


//  new code
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(78, 89))