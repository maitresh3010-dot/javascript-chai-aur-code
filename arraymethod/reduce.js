let  arr   =  [10,12,20,30,40,50,5600,70]



let newarr =  arr.reduce((acc,ele)=>{
    
    return acc+ele
})

console.log(newarr)


const users = [
    {active : true},
    {active : true},
    {active : false}
]



console.log(users.reduce((acc,ele)=>{
    if(ele.active ){
       return  acc++;
    }

    else {
        acc = 0;
    }
}))