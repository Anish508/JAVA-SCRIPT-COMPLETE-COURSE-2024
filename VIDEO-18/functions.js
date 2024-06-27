//functions of js

//functions is used to execute set of instructions in single function call ,it improves code reusability

function addTwoNumbers(num1 , num2){
    //return num1+num2
    let result = num1+num2
    return result
}
// console.log(addTwoNumbers(5,10));
const result = addTwoNumbers(4,8)
//console.log(result);

function loginUserMessage(username){
if (!username) { /* this ! symbol is used beacue in js undefined,null and "" values are considered as falsy values if condition is false then the if statement will not execute but ! symbol converts turue to false and vice-versa. */
    console.log("Please enter a user name");
    return
}
return `${username} just logged in`
}
console.log(loginUserMessage());