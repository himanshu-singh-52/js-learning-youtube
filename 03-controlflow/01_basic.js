const userloggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;

if(userloggedIn && debitCard){
    console.log("Allow to shopping");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("user logged in");
}

// Falsy values -> false, 0 , -0, BigInt, 0n, "", NULL, Undefined, NaN

// Truthy values -> true, 1, string ke andar kkuch bhi -> " ", "0", "false", empty array-> [], empty object-> {}, function(){}

const userEmail = [];    // declaring an empty array

if(userEmail.length === 0){            // to check array is empty or not
    console.log("array is empty");
}

const emptyObject = {};        // declaring an empty object

if(Object.keys(emptyObject).length === 0){     // to check object is empty or not
    console.log("object is empty");
}

// Nullish coalescing operator (??) -> use for null , undefined

let val1 ;

// val1 = 5 ?? 10;
// val1 = null ?? 5;
// val1 = undefined ?? 5;

console.log(val1);
