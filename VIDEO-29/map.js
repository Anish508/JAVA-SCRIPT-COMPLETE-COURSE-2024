const myNum = [1,4,2,7,46,70,55,23,12]

/* newNums = myNum.map((num)=>{
    return num = num+10
})
console.log(newNums); */

//chaining

const newNums = myNum
                .map((num)=> num * 10)
                .map((num)=> num + 5)
                .filter((num)=>num>100)

 console.log(newNums);