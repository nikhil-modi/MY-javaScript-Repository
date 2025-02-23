const coding = ["js", "ruby", "python", "java", "c++"]


// const values =  coding.forEach( (item) => {
//     console.log(item);
//     // so it tell that for each loop doesnot return anything eventhough its given in the variable
// } )

// console.log(values);

// so there is another way to move to each value of the array


// filter operations (uses callback function)*********************************************************************************************

const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter( (num) => {

//     return num > 4 // when using the {} we have to use the return keyword
// })


// another way to use the filter in the java script 
// const newNums = []

// myNums.forEach((nums) => {
//     if(nums > 4){
//         newNums.push(nums)
//     }
// })

// console.log(newNums);

const books = [
    {title: "book one", genre: "fiction", publish: 1981, edition: 2004},
    {title: "book two", genre: "Non-Fiction", publish: 1982, edition: 2008},
    {title: "book three", genre: "history", publish: 1999, edition: 2007},
    {title: "book four", genre: "non-fiction", publish: 1989, edition: 2010},
    {title: "book five", genre: "science", publish: 2009, edition: 2014},
    {title: "book six", genre: "fiction", publish: 1987, edition: 2010},
    {title: "book seven", genre: "history", publish: 1986, edition: 1996},
    {title: "book eight", genre: "science", publish: 2011, edition: 2016},
    {title: "book nine", genre: "non-fiction", publish: 1981, edition: 1989},
]

let userBooks = books.filter((bk) => {
    return bk.genre === "history"
})

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "history"
} )
console.log(userBooks);




