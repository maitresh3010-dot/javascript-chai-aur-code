//   let id = setInterval(()=>{
//     console.log("hello")
// }, 2000)



// setInterval(function(){
//     clearInterval(id)
// }, 10000)num



// function getvalue(){

//   const num = 'maitrsh'
//   console.log(num.toUpperCase())
// }

// getvalue()

// let str = ' maitresh tulshidas uke'

// console.log(str.slice(9))

// console.log(str)

// console.log(str.split('+'))


// console.log(str.repeat(3))

// let arr = [ 10,20,30,40]

// arr.push(50)
// console.log(arr
// )

// arr.unshift(5)
// console.log(arr)


// arr.pop(

// )

// console.log(arr
// )

// arr.shift()
// console.log(arr)


// let arr1 = [10,20,30,40,50,60,70]

// console.log(arr1.slice(0,2))
// console.log(arr1.slice(2,3))


// console.log(arr1.splice(1,1))

// console.log(arr1)
// let newarr = arr1.map((ele)=>{

//   return ele*4

// })



// console.log(newarr)


// let arr2 = [[1,2], [3,4], [5,6], [7,8]]

// console.log(arr2[0 ,1])


// const obj =  [
//    {
//    name :'maitresh',
//    age : 34, 
//    class :  "A "
//   },

//  {
//     name : " prakjwal",
//     age : 23,
//     class :" A"

//   }
// ]



// let newobj = obj.reduce((acc, ru)=>{
// acc[obj.name] = obj.age

// return acc
// })

// console.log(newobj)



// let add = function(a,b){
//   console.log(a+b)
// }


// console.log(add(5,5)); 


// let high =  (func, cout)=>{

//   for(let i =0; i <cout.length;i++){
//       return func()
//   }

// }


// let greet = () =>{
//  return "hello"
// }


// console.log(high(greet, 2))



// let obj = {
//   name :"maitresh",
//   age:30,
  
//   city: "rhatgaon",

//   phy : 90,
//   math : 99,
//   che: 100, 
//   getaAvg(){
//   let avg=  this.phy+this.math+this.che/3
//     console.log(avg)
//   }

  
// }



// console.log(obj.getaAvg)




// let a ;
// try{
//   console.log(a)
// }
// catch (e){
//    console.log(" error is occured "+e)
// }


let arrayavg = (arr)=>{
let  sum =0

  for(let i =0;i<arr.length;i++){
    sum = sum+arr[i]

    
  }
  avg = sum/arr.length

    console.log(avg)


}

console.log(arrayavg([1,2,3,4,54]))


let isEven = (n)=>{
  if(n%2==0){
    console.log("number is even")
  }


  else {
    console.log("number is odd")
  }
}


console.log(isEven(4))




const obj = {
  message : " Hello , World",
  logmsg(){
    console.log(this.message)
  }
}


setTimeout(obj.logmsg,1000)