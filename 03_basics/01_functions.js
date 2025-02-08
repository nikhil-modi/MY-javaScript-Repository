 function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
    
 }

// sayMyName()
 
// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
   // let result = number1 + number2
   // return result

   // also can do this
   return number1 + number2
}

const result = addTwoNumbers(3,4)
//console.log("Results: ", result);


function loginUserMessage(userName = "sam"){ // empty string is taken as false value 
   if(!userName){
      console.log("please enter a username");
      return 
   }
   return `${userName} just logged in`
}

//console.log(loginUserMessage("nikhil"));

//console.log(loginUserMessage());


// ... usage of rest and spread operator 

// use of rest operator (...)
function calculateCartPrice(val1, val2 , ...num1){
   return num1
}

// now suppose there are 2 variables var1 and var2 then how will this rest operator will ork 

//console.log(calculateCartPrice(200, 300, 400, 5000, 3000)); // so first 2 values will go in val1 and val2 and rest other in num1

const user = {
   userName: "nikhil",
   price: 100
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
   
}

//handleObject(user)
handleObject({
   userName: "nik",
   price: 200
})




