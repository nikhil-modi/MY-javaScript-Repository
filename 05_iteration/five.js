const coding = ["js", "ruby", "python", "java", "c++"]

// using the for each loop on the array
// in this we have to use the call back function 
// remember call back function doesn't have the name ***************************************************************************

// coding.forEach(function (val) {
//     console.log(val);
    
// })

// using the arrow function in the for each loop***************************************************************************************

// coding.forEach( (item) => {
//     console.log(item);
    
// } )



// using the printMe function *************************************************************

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


// differnt parameters in the forEach loop ********************************************************************************************

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
    
// } )


// using for each loop on the objects inside the array **********************************************************************************
// used to itirate the arrays data 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js" 
    },
    {
        languageName: "java",
        languageFileName: "java" 
    },
    {
        languageName: "python",
        languageFileName: "py" 
    }
]


myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
} )

