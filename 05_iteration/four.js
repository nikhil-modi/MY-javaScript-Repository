const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

// we have to use the for in loop to iterate the objetcs

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

// using for in loop for the array

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
   // console.log(key); // this gives the index of the arrays as the key 
    
    console.log(programming[key]);
    
}



