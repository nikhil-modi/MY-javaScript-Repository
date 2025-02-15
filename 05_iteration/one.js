// for loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    
    
}
//console.log(element);

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
           
    }
}


let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// keywords

// 1. Break and 2. continue

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        
        break
        
    }
    console.log(`value of i is ${i}`);
    
}

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        
        continue
        
    }
    console.log(`value of i is ${i}`);
    
}



