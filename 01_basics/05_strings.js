// use of the backticks ``

const name = "nikhil"

const repoCount = 2

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);
 
// declaring string
 const gameName = new String('coderty-hc')

 // when we print the string in browser's console then we get the object as data type of String 

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());

//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('t'));
 
 const newString = gameName.substring(0, 4);
 console.log(newString);

 const anotherString = gameName.slice(-8, 4) // here in slice we can give negative value to break the string from last 
 console.log(anotherString);

 const newStringOne = "    nikhil    "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://www.google.com/nikhil%20modi"

 console.log(url.replace('%20', '-'));

 console.log(url.includes('sundar'));
 
 
 
 

 



 
 
 
 
 


