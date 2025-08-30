const marvel_heroes = ["spiderman", "thor", "ironman"];
const heroes = ["shaktiman", "ramcharan"];

// // one way
// const main = marvel_heroes.push(heroes);
// console.log(main);
// //console.log(main[3][1]);

// second way -> mainly for two arrays only
const all_heroes = marvel_heroes.concat(heroes);
console.log(all_heroes);

// third way -> for more than 2 arrays also
const all_new = [...marvel_heroes , ...heroes];
console.log(all_new);

// merging two or more than two arrays in one
const an_array = [1,2,3,4,[5,6,],7,[6,[5,4]]];
const all_in_one = an_array.flat(Infinity);
console.log(all_in_one);

console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name: "Rohit"}));   // Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
