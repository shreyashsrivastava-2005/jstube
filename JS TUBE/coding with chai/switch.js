// syntax for switch case
// switch (key) {
//     case value:

//     break;

//     default;

//     break;
// }



const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("Febraury")
        break;

    case 3:
        console.log("March")
        break;

    case 4:
        console.log("April")
        break;

    default:
        console.log("default case")
        break;
}


//  break is used to stop the control flow in code



// terniary operator

// condition ? true : false

const price = 100
price >= 80 ? console.log("less than 80"): console.log("more than 80")