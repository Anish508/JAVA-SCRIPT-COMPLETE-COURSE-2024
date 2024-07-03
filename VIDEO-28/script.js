//high order function

// forof loop
const arr = [12, 47, 82, 38, 72, 43, 21];
for (const val of arr) {
  // console.log(val);
}

const greeting = "hello world";
for (const char of greeting) {
  console.log(`characters are ${char}`);
}


//map object used to iterate objects through key and values, duplicate values are not considered by map objects
const map = new Map()

map.set('IN' , 'India')
map.set('IN' , 'India')
map.set('FR' , 'France')
map.set('USA' , 'United States of America')

console.log(map);

for (const [key , value] of map) {
   // console.log(key);
    console.log(key ,":-" , value);
}


//forin loop
const myObj = {
    'game1 ':"ff",
    'game2 ':"pubg",
    'game3 ':"coc",
    'game4 ':"ww2",
}

for (const key  in myObj) {
   console.log(key ,':',myObj[key]);
}

const language = ['js','python','cpp','c','java']

for (const key in language) {
   console.log(language[key]);
}

