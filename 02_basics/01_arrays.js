const myArr = [1,2,3,4,5,6]

// JS arrays are resizable and it can comntains array inside another array

// In JS when doing the copy operations this
// create the shallow copies 

// read about the shallow and deep copies of the JS and understand their working 
const myHeroes  = new Array(1,2,3,4,5,6,7)

// arrays methods *********************************************+++++++++++++++++++++++++++++###############################################
//myArr.push(6)
//console.log(myArr);

// myArr.pop(); // this removes the last element from the array
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);

//myArr.shift(); // this is used to remove the elements from the starting nof the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));


// console.log(myArr);

// const newArr = myArr.join(); // this is used to convert array to string 
// console.log(myArr);
// console.log(newArr);

// slice and splice **************************************************************************************************************

console.log("A ", myArr);

const newArr1 = myArr.slice(1,3); // in slice the range given is not included and the result given doesn't effect the original array 

console.log(newArr1);

console.log("B ", myArr);

const newArr2 = myArr.splice(1,3); // in this range is included and here original array is manupulated 

console.log("C ", myArr);
console.log(newArr2);













