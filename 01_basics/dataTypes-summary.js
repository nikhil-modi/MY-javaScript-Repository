//primitive and non primitive data types


// primitive data types (call by value data types)

// these are 7 types:
/* 
String
Number 
Boolean
Undefined 
null
symbol --> used to make something unique
bigInt
*/

// mastering objects and browser webevents will master the JS

// non primitive datatypes (reference types)

// arrays, Objects, functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId  = Symbol('123')

console.log(id === anotherId); // this will be false because Symbol gives the unique value 


//arrays
const heros = ["captain", "iron man"]

let myObj = {
    name: "nik",
    age: 22
}

// function

const myFunction = function(){
    console.log("hello");
    
}

// to find data types of a variable
console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and heap memory
// Data Types = DT

// all primitive data type uses Stack memory --> primitive DT uses the copy of the value 
// all non primitive data types uses Heap memory

let myYoutubename = "helloWorld"

let anotherName = myYoutubename
anotherName = "HiWorld"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

// in stack memory we deal with the copy of the data stored in that
// in heap memory we deal with the reference of the data stored in that 

let userTwo = userOne

userTwo.email = "nikhil@google.com"

console.log(userOne.email);
console.log(userTwo.email);




