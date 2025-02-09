// let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);


// curly braces {} are the scope in all the prohramming language 

// global and local scope 

function one(){
    const userName = "nikhil"

    function two(){
        const website = "youtube"
        console.log(userName);
        
    }
    //console.log(website);
    two()
}
// one()

if(true){
    const userName = "nikhil"
    if(userName === "nikhil"){
        const website = " youtube"
        console.log(userName + website);
        
    }
    //console.log(website);
    
}
//console.log(userName);

// +++++++++++++++++++++++++++++++++ Interesting concept ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num){
    return num+1
}
addOne(5)


const addTwo = function(num){
    return num+2
}

addTwo(5)

