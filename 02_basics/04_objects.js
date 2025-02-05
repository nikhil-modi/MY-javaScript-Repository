// const tinderUser = new Object()  // -----> this is the singleton object 

const tinderUser = {} // ------> this is the normal user 

tinderUser.id = "123abc"
tinderUser.name = "tuiya"
tinderUser.isLogged = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "tuiya",
            lastName: "Rathi"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)  // using the empty flower brackets is a good practice to merge the 2 objects together 

// mainly we will be using this syntax to merger two or more objects 

const obj3 = {...obj1, ...obj2, ...obj4}

// now taking the scenario when the data coming from the data base then this will be the format of data received 

const users = [
    {
        id: 1,
        email: "h@h.com"
    },
    {
        id: 2,
        email: "i@h.com"
    },
   
]

//console.log(users[1].email)

//console.log(obj3);

//console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // this is used to get the keys of the objects and this will return in form of arrays which then can be used in different places using the for or any other loop
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// to ask the objects if the proprty is available in the object or not 

// console.log(tinderUser.hasOwnProperty('isLogged'));


// destructoring  of Objects**********************************************************************************************************

const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Tuiya"
}

const {courseInstructor: instructor} = course // using the curly braces will help to reduce the dependecy on the dot operator to use the values of the objects
// the above one is destructoring 
console.log(instructor);











