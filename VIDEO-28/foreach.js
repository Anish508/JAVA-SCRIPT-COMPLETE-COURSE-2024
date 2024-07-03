//for each loop

const language = ['js','python','cpp','c','java']

language.forEach( (item) =>{
    //console.log(item);
})

function printMe(item){
    //log(item);
}

language.forEach(printMe)

language.forEach( (item , index, arr)=>{
console.log(item,index,arr);
})

const myCodding = [
    {
        languageName :"js",
        languagefilename :".js"
    },
    {
        languageName :"python",
        languagefilename :".py"
    },

    {
        languageName :"java",
        languagefilename :".java"
    }
]

myCodding.forEach((item)=>{
console.log(item.languageName);
})