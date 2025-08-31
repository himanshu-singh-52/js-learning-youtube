// 1st

// function sum(number1, number2){     // just printing the value not returning
//     console.log(number1 + number2);
// }

// function add(number1, number2){    // it returns the value 
//     return number1 + number2;
// }   

// const result1 = sum(4,5);
// console.log("result: ", result1);
// const result2 = add(4,5);
// console.log("result: ", result2);


// 2nd

// function loginUserMessage(username){          // loginUserMessage(username = "Sam") -> atleat it will print sam even no argument
//     if(username === undefined){               //  -> if(!username)
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("rohit"));
// console.log(loginUserMessage());


// 3rd

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500));

// function calculateCartPrice(val1, val2, ...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 300, 400, 500));

const user = {            // functions with objects
    userName : "Hitesh",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user);

const myNewArray = [200, 300, 400];   // functions with arrays

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400]));

