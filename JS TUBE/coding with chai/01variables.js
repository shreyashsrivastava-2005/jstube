const accountId = 6584270
let accountEmail = "srivastshreyash@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"   
// var keyword automatically reserve some space in memory by which we can see above example as accountCity
let accountState;


// accountId = 2          (not allowed)

accountEmail = "contactme@gmail.com"
accountPassword = "98765"
accountCity = "Gorakhpur"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
prefer not to use var keyword for programming beacuse of issue in block spaceand functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
