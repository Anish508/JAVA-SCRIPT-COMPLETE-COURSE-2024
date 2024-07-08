//Advanc objects

const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')

console.log(descriptor);

const user = {
    name : "Anish",
    id : "Anish@gmai.com",

    greetings : function(){
        console.log("Thank you for visiting us");
    }
}


/* Object.defineProperty(user , 'name',{
    writable : false,
    enumerable : false
}) */

console.log( Object.getOwnPropertyDescriptor(user , "name"));

for (const [key , value] of Object.entries(user)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }

}