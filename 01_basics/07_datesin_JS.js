// dates

let myDate = new Date();
//console.log(myDate.toString());


// in JS the months start from 0 

//let myCreatedDate = new Date(2025, 0, 23);

//console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2025, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2025");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})

