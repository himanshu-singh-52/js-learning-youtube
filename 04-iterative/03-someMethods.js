// const coding = ["js", "java", "cpp", "py"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

// // filter method

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// // 1st way
// const newNums = myNums.filter( (num) => {  
//     return num>4 && num<8;
// })
// console.log(newNums);

// // 2nd way
// const Nums = myNums.filter( (num) => num>4 && num<8);
// console.log(Nums);


// // map method

// const myNumrs = [1,2,3,4,5,6,7,8,9,10];

// const newNumrs1 = myNumrs.map( (num) => {
//     return num+10;
// })

// console.log(newNumrs1);

// // chaining of methods

// const newNumrs2 = myNumrs.map( (num) => num*10).map( (num) => num+1).filter( (num) => num>50);

// console.log(newNumrs2);

// // reduce method

// const myNumSReduce = [1,2,3];

// const myTotal1 = myNumSReduce.reduce(function (acc, currval){
//     console.log(`acc = ${acc} and currval = ${currval}`);
//     return acc+currval;
// }, 0)

// console.log(myTotal1);

// const myTotal2 = myNumSReduce.reduce( (acc, currval) => acc+currval , 0);

// console.log(myTotal2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "cpp course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);