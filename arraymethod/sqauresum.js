// let sum =(arr)=>{
//     let sum = 0;
//     for(let i =0;i<arr.length;i++){
//         arr[i]= arr[i]*arr[i]
//         sum=  sum +arr[i]
//     }
//     return sum

// }



// console.log(sum([10,20,2,3,34]))



// let val =  [1,2,3,4,5,6,7]

// let newsum = val.map((ele)=>{
//     return ele+5
// })

// console.log(newsum




// )


let name =  [ 'maitresh', 'bruce', 'chodu', 'gandu', 'bakrichod', 'buldo', 'betichod']



let newname  =  name.map((ele)=>{
    return ele.toUpperCase()
})
console.log(newname)



function doubelAndReturnArgs(...arr){
    console.log(arr)

    let newarr =  arr.map((ele)=>{
        return ele * 2
    })
    return newarr
}



console.log(doubelAndReturnArgs(1,2,3,4,5,))





let obj1= {
    name: 'maitresh',
    age: 23,
    city: 'surat'   
}
obj2 = {
    name: 'bruce',
    age: 24,
    city: 'mumbai'   
}

let obj3 = {...obj1,...obj2}
console.log(obj3

)