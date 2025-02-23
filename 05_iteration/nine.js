const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)

console.log(myTotal);


const shoppingCartr = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 999
    },
    {
        itemName: "python",
        price: 1999
    },
    {
        itemName: "data science",
        price: 9999
    }
]

const priceToPay = shoppingCartr.reduce( (acc, item) => acc + item.price,0 )

console.log(priceToPay);

