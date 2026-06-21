let arr = [12,3,45,6]

let arrnew  = arr.map((iten)=>{
    return iten*2
})
console.log(arrnew)


let nums= [1,2,3,4,5,56,67,7,4,6,7,8,56,43,55,3,789,96,54,3]

let even = nums.filter((item)=>{
    return item%2==0
})
console.log(even)