const userEmail = "n@gmail.com"
const userEmail1 = ""

if(userEmail1){
    console.log("got user email");
    
}else{
    console.log("don't have email");
}


// falsy value --> the values which are considered zeros 

// 1. false
// 2. 0
// 3. -0
// 4. BigInt
// 5. On
// 6. "" --> empty String
// 7. null
// 8. undefined
// 9. NaN --> not a number 

// truthy values ---> the values which are true

// 1. "0" --> if zero is added as a string it becomes truthy
// 2. "false" --> if false is added as a string it becomes truthy
// 3. " " --> empty string with a space 
// 4. [] --> empty Array
// 5. {} --> empty objects
// 6. function () {} --> empty functions


// how to check the array if its empty --> check its length and if its length is zero then its empty

// to check empty object

const emptyObj = {}

if( Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}



//*************************************************************************************************************

// nullish coalescing operator (??): null undefined 

// this operator try to assign the value form the 2 given values and if it doesn;t get proper value it assign null or undefined 



let val1;
// val1 = 5??10
// val1 = null ?? 10
val1 = undefined ?? 15 

val1 = null ?? 10 ?? 20



//console.log(val1);


// Terniary operator ******************************************************

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");









