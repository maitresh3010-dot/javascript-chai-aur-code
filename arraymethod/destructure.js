// let name =  [ 'maitresh', 'bruce', 'chodu', 'gandu', 'bakrichod', 'buldo', 'betichod']
// let [winner, runnnerup, third, ...other]= name

const { response } = require( "express" )

// console.log(winner)
// console.log(other)


// let name    = ['maitresh', 'prajwal', 'shivesh']


// const ob = {
//     success: true,

//     info:{

//          id  :1,
//         price : 4000,
//         name: "bmx",
//         dist: "amravati"
//     }
// }


// const {
//     data :{
//         name, price
//     }
// }  =  response;

// console.log(name)



// let arr  =  ['red', 'white', 'black']


// let  [frist, second] = arr
// console.log(frist )

 function getme (){
    return {
        name:"maitresh",

        age : 20
    }
 }


 const  {name, age}  = getme();

 console.log(name)