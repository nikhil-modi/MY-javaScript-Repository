const coding = ["js", "ruby", "python", "java", "c++"]


// const values =  coding.forEach( (item) => {
//     console.log(item);
//     // so it tell that for each loop doesnot return anything eventhough its given in the variable
// } )

// console.log(values);

// so there is another way to move to each value of the array


// filter operations (uses callback function)*********************************************************************************************

const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter( (num) => {

    return num > 4
})

console.log(newNums);




