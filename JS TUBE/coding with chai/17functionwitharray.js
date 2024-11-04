//  a situation where you don't know how many arguments are there

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))
/** [ 200, 400, 500 ]*/


function calculateCartPrice(value1, value2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))
//  in above case 200 is value1, 400 is value2 and rest of all come in num1




// const user = {
//     username: "anshuman",
//     price: 899
// }
function handleObject(anyObject){
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "rudra",
    price: 799
})



const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));/** 400 */