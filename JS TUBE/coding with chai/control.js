//  if
// syntax-
// if (condition = true){
//     // code will run from here;
// }


const temperature = 45;

if (temperature === 45){
    console.log("it's right")
}




// if else statement
// const marks = 98;
// if (marks == 100) {
//     console.log("2 marks more")
// } else{
//     console.log("less")
// }



// const score = 200;

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`)  // ReferenceError: power is not defined because scope of power ends in condition




// const balance = 1000
// if (balance > 500) console.log("good"), console.log("test 2")
//  we can do this but it's a bad idea to write code like this





// --------NESTED CONDITIONS-----------


// const score = 350

// if (score < 200){
//     console.log("decent score")
// } else if(score > 200){
//     console.log("good score")
// } else{
//     console.log("defendable score")
// }


// for real life example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in")
}