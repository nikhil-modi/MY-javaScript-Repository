// Immediately Invoked Function Expression (IIFE)

// in this expression we wrap the function in the braces and then use the another pair of braces to execute the as shown below

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();


//    (//here comes the function definition)(// here comes the function execution)

// use the semicolen if using 2 or more same type of IIFE 

((name) => {
    // unnamed IIFE
    console.log(`db connected two ${name}`);
    
})('nikhil');



