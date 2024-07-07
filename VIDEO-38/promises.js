const promiseOne = new Promise(function(resolve , reject){
     //Do an async task
     //DB calls , cryptography ,network call
     setTimeout(function(){
        console.log("async task complete");
        resolve()
     },1000)
})

promiseOne.then(function(){
    console.log("prmise consumed");
})


new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("async task two");
        resolve()
    }, 1000);
}).then(function(){
    console.log("async2 is resoved");
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username :'Anish' , password :"anish@1732"})
    },1000)
})
promiseThree.then((user)=>{
console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username :'anish' , pass:'ajiu!986'})
        }else{
            reject("ERROR:something went wrong")
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((name=>{
    console.log(name);
}))
.catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username :'java script' , pass:'js#$jkweoi'})
        }else{
            reject("ERROR:js went wrong")
        }
    }, 1000);
})

/* async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
} */
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
consumePromiseFive()

/* async function getAllUser(){
   try {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    console.log(data);
   } catch (error) {
    console.log(error);
   }
}
getAllUser() */

fetch('https://api.github.com/users')
.then((resonse)=>{
    return resonse.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>console.log(error))