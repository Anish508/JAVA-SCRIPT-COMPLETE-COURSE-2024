//filter , map ,reduce

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

const data = courses.filter((course)=>{
return course.fees < 20000 && course.duration >70
})
console.log(data);

