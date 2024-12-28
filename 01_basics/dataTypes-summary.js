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
