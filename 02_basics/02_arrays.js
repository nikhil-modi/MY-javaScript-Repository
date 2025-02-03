const marvel_heroes = ["thor", "iron man", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

const all_heroes = marvel_heroes.concat(dc_heroes); // it merge the 2 arrays 
//console.log(all_heroes);

//using the spread operator ******************************** here we need to use only 3 dots to merge 2 or more arrays 
const all_new_heroes = [...marvel_heroes, ...dc_heroes, ...all_heroes];
//console.log(all_new_heroes);

// console.log(Array.isArray("Nikhil"));
// console.log(Array.from("Nikhil")); // this convert the string into array 
// console.log(Array.from({name: "nikhil"})); // this is related to interview question and intresting part

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // this converts into a new array














