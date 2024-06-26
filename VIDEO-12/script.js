/* let now = new Date()
console.log(typeof now.toLocaleString());

let myDate = new Date(2023 , 0 , 14)
console.log(myDate.toLocaleString());
 */
let mynewDate = new Date("01-14-2024")
console.log(mynewDate.toLocaleString());

let myTimeStamp = Date.now()

/* console.log(myTimeStamp);
console.log(mynewDate.getTime()); */

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//important
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})