const marvelHeros = ["Thor", "Captain", "Wanda", "Daredevil"]
const dcHeros = ["Batman", "Superman", "Green Lantern", "Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[4][2]);/**green lantern */

//  array has a demerit of taking another array in it as an object

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)/** concat return a new arrconstay to us */

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros )

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [1, 2]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(anotherArray)
console.log(realAnotherArray)

console.log(Array.isArray("Anshuman"))
console.log(Array.from("Anshuman"))

let score1 = 1000
let score2 = 2000
let score3 = 3000
console.log(Array.of(score1, score2, score3))
