//function with objects and arrays

function getNumbers(val1,val2, ...num){ //... are known as spread operators in functions it is used when we dont know the number of arguments passed to the function
    return num 
}
console.log(getNumbers(5,90,56));

const users = {
    name:"anish",
    pass:"anish#19282"
}
function objectData(anyObj){
console.log(`user name is ${anyObj.name} and password is ${anyObj.password}`);
}
objectData({
    name:"anish",
    password:"anish#19282"
})

function arraysData(...anyArrays){
console.log(`numbers are :${anyArrays}`);
}
arraysData([10,82,9,7])