// singleton --> Object.create is used for the singleton 

// object literals 

// declaring the symbol 
const mySym = Symbol("Key1")


const jsUser = {
    name: "nikhil",
    age: 27,
    "full name": "nikhil modi",
    [mySym]:"myKey1",
    location: "bangalore",
    email: "nikhil@google.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// to access the values of the objects then we can use 2 method 
// first one is using the dot and other using the square brackets

// console.log(jsUser.name);
// console.log(jsUser["location"]);

// 2nd method is use full when declaring objects in this way
// "full name" : "nikhil modi"

// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]); ------> remeber this 

// changing the value of the objects 

jsUser.email = "nikhil@amazon.com";
//console.log(jsUser);

// freezing the object declared so that it cannot be changed 
//Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log("hello user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// remember note
// whenever accessing any value in the object use the dot notation










