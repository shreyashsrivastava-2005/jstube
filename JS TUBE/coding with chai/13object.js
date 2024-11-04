// singleton

//  OBJECT LITERALS

//  how to declare symbol-
const mySym = Symbol("key1")


const jsUser = {
    name: "Anshuman",
    "Full name": "Anshuman Srivastava",
    [mySym]: "mykey1",/**when we need to refer symbol then we must use "[]" */
    age: 20,
    location: "gorakhpur",
    email: "srivastshreyash@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: "",
    loginDays: ["Monday", "Tuesday", "Wednesday", "Thursday"]
}

// console.log(jsUser.age)
// console.log(jsUser["age"])
// console.log(jsUser["Full name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser.mySym)

jsUser.email = "shreyashsrivastava1234@gmail.com"
// Object.freeze(jsUser)/**used to freeze the element of object */
// console.log(jsUser.email)
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello user");
}

jsUser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo);