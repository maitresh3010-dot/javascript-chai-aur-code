let arr  =  [10,20,30,40,50,60,70]


console.log(arr.map(function(ele){
    return ele/2 
}))




let student = [
    {
        name: "maitresh",
        marks : 98
    }, 

    {
        name:"prajwal",
        marks : 99
    }, 
    {
        name : "shivesh",
        marks: 100
    }
]


let gpa =    student.map((elem)=>{
    return  elem.marks / 10;
})

console.log(gpa)