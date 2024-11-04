//  truthy and falsy values where we assume that value of paticula code will be true or false

//  some of the fasly values are - false, 0, -0, BigInt, "", null, undefined, NaN
//  some of the truthy values are- "0", 'false', " ", [], {}, function(){}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}





//  nullish coalescing operator --> it only deals in null and defined values

let val1;
let val2;
// val1 = 5 ?? 10
val1 = null ?? 10
val2 = null ?? undefined



console.log(val1);
console.log(val2)