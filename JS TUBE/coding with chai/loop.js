// //  loop statements are used for printing multiple line of codes simultaneously
// // they are also known as iterators

// // ----- FOR LOOP ------

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         // console.log("half of the numbers are printed")
//     }
    
//     // console.log(element)
// }




// // for (let i = 0; i <= 5; i++) {

// //     console.log(`outer  value ${i}`)
// //     for (let j = 0; j <= 5; j++) {
        
// //         console.log(`inner loop value: ${j} and outer loop ${i}`)
// //         console.log(i + '*' + j + '=' + i*j)
// //     }
// // }



// // let myArray = ["captain", "iron man", "thor", "deadpool"]

// // for (let index = 0; index < myArray.length; index++) {
// //     const element = myArray[index];
// //     console.log(element)
// // }


// //  ------ break and continue ------

// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log("5 is detected")
// //         break;
// //     }
// //     console.log(`value of i is: ${index}`)
    
// // }






// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log("5 is detected")
// //         continue;
// //     }
// //     console.log(`value of i is: ${index}`)
    
// // }









// //  --------- while loop ---------
// let index = 0
// while (index <= 10) {
//     // console.log(`value of index is ${index}`)
//     index = index + 2
// }




// let myArray = ["ram", "rahim", "joseph", "gurvinder"]

// let arr = 0
// while (arr < myArray.length) {
//         // console.log(`value is ${myArray[arr]}`);
//         arr = arr + 1
// }




// let score = 11

// do{
//     console.log(`score is ${score}`)
//     score++

// }while(score <= 10)




// ------ for of loop

// 

// for(const index in ar){
//     console.log(ar[index]);
// }


//   ar.forEach((data,index,arr)=>{
//     console.log(arr);
//   })

//  const xxxx  = ar.map((d,index,arr)=>{
 
//     return arr
// })

    // console.log(xxxx);

    const arr = [10,20,30,40,50,60,70,80,90,100];
// const x = arr.filter((data,index,arr)=>{
//         return data >= 60;
// })

// console.log(x);


const total = arr.reduce((accumulator,currentValue,data,index,arr)=>{
    return accumulator + currentValue;
},0)


// console.log(total);




const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('UK', "United Kingdom")

// console.log(map)



// ----------- FOR IN -------

const program = ["js", "cpp", "python", "java"]

for (const key in program) {
//    console.log(key)
}

// ------- FOR EACH ------
const coding = ["js", "cpp", "python", "java"]

// coding.forEach(function (item){
//     console.log(item);
// })

coding.forEach((item) => {
    // console.log(item)
});



const myCoding = [
    {
        langName: "pyhton",
        langFile: "py"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "ruby",
        langFile: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langFile)
})