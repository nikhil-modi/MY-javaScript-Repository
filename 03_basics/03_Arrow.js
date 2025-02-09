const user = {
    username: "nikhil",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let userName = "nikhil"
//     console.log(this.userName);
    
// }

// chai()

// const chai = function(){
//     let userName = "nikhil"
//     console.log(this.userName);
// }

const chai = () => {
    let userName = "nikhil"
    console.log(this);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // here we are using the explicit return 
// }

// in the arrow function if you are using the curly braces then you have use the return keyword as shown above
// if you are not using the curly braces then return keyword is not required as shown below 

//const addTwo = (num1, num2) => (num1 + num2) // this is the implicit return where return statement is not used because we are not using the curly braces

const addTwo = (num1, num2) => ({userName: "nikhil"}) // this is the return of the object 
console.log(addTwo(3,4));



// inside the browser the global object is window object and its asked mainly in interviews 