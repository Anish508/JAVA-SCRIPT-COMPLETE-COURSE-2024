fetch('https://api.github.com/users')
.then((resonse)=>{
    return resonse.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>console.log(error))