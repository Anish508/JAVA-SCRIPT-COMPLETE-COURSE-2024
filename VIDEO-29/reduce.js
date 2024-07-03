const myNums = [1,6,2,13,64,32]

let initialVal = 0
const sumWithInitial = myNums.reduce((acc , curr)=> {
    console.log(`accumulator is :${acc} current value is ${curr} `);
   return acc + curr
 }, 0 )
console.log(sumWithInitial);

let courses = [{
    course_name : 'data science',
    fees : 78880,
    duration: '50'
},

{
    course_name : 'cloud computing',
    fees : 10000,
    duration: 60
},
{
    course_name : 'cyber security',
    fees : 15000,
    duration: 80
},
{
    course_name : 'web dev',
    fees : 75880,
    duration: 30
},
]

const totalfee=courses.reduce(( acc , course)=> course.fees + acc , 0)
console.log(totalfee);