let nums   = [1,2,3,4,5,3,4,7,8,1,2]
let newarr =  nums.slice(1,3)
console.log(newarr)
let res =  nums.reduce((max, ele)=>{

    if(ele>max){
        return ele
    }

    else {
        return max
    }
})


console.log(res)