// singleton or constructor

const tinderUser = new Object()/**singleton object */
console.log(tinderUser) 
     // or
const user = {}/**non-singleton object */
console.log(user)    

tinderUser.id = "AYH198"
tinderUser.name = "Akhil"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//  let's try an example for objects within objects 
const regularUser = {
    email: "contactme@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Anshuman",
            lastname: "Srivastava",
        }
      }
    }
    
    
console.log(regularUser)
// console.log(regularUser.fullname.userfullname.lastname);
// console.log(regularUser.fullname.userfullname)

// now time to code for combining objects
const obj1 = {1: "a" , 2: "b" , 3:"c"}
const obj2 = {4: "avengers" , 5: "batman" , 6: "cartoon"}
// const obj3 = { obj1, obj2}
      //or
const obj3 = Object.assign({}, obj1, obj2)  
console.log(obj3)
// let's do one example by own 
const harry = {"Father": "James Potter" ,  "Mother": "Lily Potter"}
const shinchan = {"Papa": "Harry Nohara" ,  "Mummy": "Mitsy Nohara"}
const moneyHeist = {"Mind": "Professor" ,  "SuperCop": "Alicia Sieraa"}
// const fun = Object.assign({} , harry, shinchan, moneyHeist)/**easy way to find the result */
const fun = {...harry, ...shinchan, ...moneyHeist}/**here we are using spread */
console.log(fun)


//  condition when values came from database
const users = [
    {
        id: 1,
        email: "contactus@gmail.com",
    },
    {
        id: 1,
        email: "contactus@gmail.com",
    },
    {
        id: 1,
        email: "contactus@gmail.com",
    }
]

users[1].email
console.log(tinderUser)/**{ id: 'AYH198', name: 'Akhil', isLoggedIn: false } */
console.log(Object.keys(tinderUser));/**[ 'id', 'name', 'isLoggedIn' ] */
console.log(Object.values(tinderUser))/**[ 'AYH198', 'Akhil', false ] */
console.log(Object.entries(tinderUser))/**[ [ 'id', 'AYH198' ], [ 'name', 'Akhil' ], [ 'isLoggedIn', false ] ] */

console.log(tinderUser.hasOwnProperty('isLoggedIn'))/**true */