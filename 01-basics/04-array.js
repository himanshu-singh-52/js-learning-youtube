const marvel_heroes = ["spiderman", "thor", "ironman"];
const heroes = ["shaktiman", "ramcharan"];

// one way
const main = marvel_heroes.push(heroes);
console.log(main);
//console.log(main[3][1]);

// second way
const all_heroes = marvel_heroes.concat(heroes);
console.log(all_heroes);
