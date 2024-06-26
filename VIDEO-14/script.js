let healthy_foods = ['rice', 'paneer','daal','vegies','milk']
let unhealthy_foods = ['samosa', 'fizza','fast-foods','deep fried','burgers']

/* healthy_foods.push(unhealthy_foods)
console.log(healthy_foods[5][0]); */

const newarray =  healthy_foods.concat(unhealthy_foods)
/* console.log(newarray);
 */

const foods = [...healthy_foods ,...unhealthy_foods]
// console.log(foods);

const anotherArr = [3,6,1,[21,632,2],[33,1,6],3,9,[14,9]]
console.log(anotherArr.flat(Infinity));

console.log(Array.isArray("Anish"));
console.log(Array.from("Anish"));
console.log(Array.from({name:"Anish"}));

let score1 =100
let score2 =300
let score3 =200

console.log(Array.of(score1,score2,score3));