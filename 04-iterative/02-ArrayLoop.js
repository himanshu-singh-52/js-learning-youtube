// for of loop -> use for arrays
// const arr = [1,2,3,4,5];

// for(const nums of arr){
//     console.log(nums);
// }

// const greetings = "Hello World";
// for(const greet of greetings){
//     console.log(`each char is ${greet}`);
// }

// map -> something to know


// for in loop -> use for objects
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
};

for(const key in myObject){
    console.log(`${key} -> ${myObject[key]}`);
}