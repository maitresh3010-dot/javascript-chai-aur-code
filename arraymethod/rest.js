// let sum = (...args)=>{


//     for(let i =0;i<args.length;i++){
//         console.log("you give us : "+args[i])
//     }
// }

// console.log(sum(1,2,3,4,5))


// function min(a,b,c,d){
//     console.log(arguments);
// }


// console.log(min(1,5,6,7))



// function sum(...args){
//     return args.reduce((sum,el)=>sum+el)
// }


// console.log(sum(1,2,3,4,5,6,7,8,9))


function min (msg, ...args){

    console.log(msg)
  return  args.reduce((min ,ele)=>{

    if(ele<min){
        return ele
    }

    else {
        return min
    }

  })
}

console.log(min(1,2,3,3,4,0,-3,-4,1,-10))



let sum =(...args)=>{


  for(let i =0; i<args.length; i++){
  return  args;

  }
}
 

console.log(sum(1,2,3,4,5,6,7,8,9,10))