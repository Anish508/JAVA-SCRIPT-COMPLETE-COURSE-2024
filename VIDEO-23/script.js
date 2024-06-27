//IIFE

(function iife(){
    //named iife
    console.log(`db connected`);
})(); //semcolon is important in iife

((name)=>{
    //simple iife
    console.log(`db two connected ${name}`);
})('anish')