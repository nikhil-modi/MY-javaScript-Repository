// for of loop --------------------------------------------------->
// this is popular for the arrays 


const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);
    
}

// simple program to print each word of the sting 

const greetings = "hello world"
for (const greet of greetings) {
    if(greet === ' '){
        continue
    }else{
        //console.log(`each character is ${greet}`);
    } 
}

// MAPS --------------------------------------------------------------------------------------------------->
// used for storing uniue values only

const map = new Map()

map.set("IN", "India")
map.set("USA", "united states of america")
map.set("FR", "france")

//console.log(map);

// printing the map using the for of loop 


for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}



