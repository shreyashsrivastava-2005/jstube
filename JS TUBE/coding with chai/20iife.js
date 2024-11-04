// Immediately Invoked Function Expression(IIFE)


//  example for named iife is given below
(function chai(){
    console.log('DB Connected')
})();
//  this  ; end the working of iife on above line
//  global scope ke variable declaration ke pollution se bchne ke liye hm IIFE use krte h

( (name) => {
    console.log(`DB CONNECTED TWO ${name} ` )
})('ranjeet')