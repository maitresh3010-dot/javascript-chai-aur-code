let arr = [10,30,40,50,60,70,80,90]

let res = arr.every((ele)=>{
    return ele%10  == 0
})


console.log(res)



let mini =  arr.reduce((res , ele)=>{
    if(res<ele){
        return res
    }

    else {
      return  ele
    }
})

console.log(mini)
